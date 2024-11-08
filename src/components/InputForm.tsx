import React, { useState } from 'react';

interface InputFormProps {
  onSubmit: (data: { pretest: number[]; posttest: number[]; usage: string }) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [pretest, setPretest] = useState('');
  const [posttest, setPosttest] = useState('');
  const [usage, setUsage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pretestValues = pretest.split(',').map(Number);
    const posttestValues = posttest.split(',').map(Number);
    onSubmit({ pretest: pretestValues, posttest: posttestValues, usage });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="pretest" className="block text-sm font-medium text-gray-700">
          Pretest Values (comma-separated)
        </label>
        <input
          type="text"
          id="pretest"
          value={pretest}
          onChange={(e) => setPretest(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="posttest" className="block text-sm font-medium text-gray-700">
          Posttest Values (comma-separated)
        </label>
        <input
          type="text"
          id="posttest"
          value={posttest}
          onChange={(e) => setPosttest(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="usage" className="block text-sm font-medium text-gray-700">
          Usage
        </label>
        <select
          id="usage"
          value={usage}
          onChange={(e) => setUsage(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          required
        >
          <option value="">Select usage</option>
          <option value="learning">Learning in classes</option>
          <option value="completed">Completed case study</option>
          <option value="ongoing">Ongoing case study</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
      >
        Calculate
      </button>
    </form>
  );
};

export default InputForm;