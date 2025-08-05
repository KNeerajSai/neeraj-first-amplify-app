"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("🚀 Hello from Chinchilla Academy! Ready to build amazing apps with AWS Amplify!");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🚀 Neeraj's First Amplify App
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Built with Next.js + AWS Amplify at Chinchilla Academy
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border">
          <h2 className="text-xl font-semibold mb-4">🎉 Congratulations!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your Amplify app is running successfully. Here's what you've accomplished:
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 text-gray-600 dark:text-gray-300">
            <li>✅ Created a Next.js application</li>
            <li>✅ Added AWS Amplify backend configuration</li>
            <li>✅ Set up authentication and database resources</li>
            <li>✅ Ready for deployment to AWS</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Interactive Demo
          </h3>
          <p className="text-blue-600 dark:text-blue-300 mb-3">{message}</p>
          <button
            onClick={() => setMessage("You clicked the button! 🎊 Your app is interactive!")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Click me to test interactivity!
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Next steps: Deploy to AWS Amplify Console and start building amazing features!
          </p>
        </div>
      </main>
    </div>
  );
}