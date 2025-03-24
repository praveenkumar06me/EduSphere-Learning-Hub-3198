import React, { useState } from 'react';
import { FeedbackWorkflow } from '@questlabs/react-sdk';

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-2 rounded-l-lg shadow-lg hover:bg-primary-700 transition-colors"
      >
        Feedback
      </button>

      <FeedbackWorkflow
        questId="c-greta-feedback-workflow"
        uniqueUserId="u-f5d44755-989f-487f-869c-c099efcd7f11"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        accent="#0284c7"
      >
        <FeedbackWorkflow.ThankYou />
      </FeedbackWorkflow>
    </>
  );
};

export default FeedbackButton;