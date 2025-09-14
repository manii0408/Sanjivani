export default function Contact() {
    return (
    <div className="min-h-screen px-4 py-12 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="max-w-xl mx-auto mt-10 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold text-center mb-4 text-red-600 dark:text-red-400">Contact Us</h2>
        <form className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" />
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Send</button>
        </form>
      </div>
    </div>
    );
  }