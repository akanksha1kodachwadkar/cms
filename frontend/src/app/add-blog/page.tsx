"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!title.trim() || !content.trim()) {
      setError("Please fill in both title and content fields.");
      setIsLoading(false);
      return;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`,
        { title: title.trim(), content: content.trim() },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      router.push("/manage-blogs");
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message || "Failed to add blog. Please try again.";
      setError(errorMessage);
    }
    setIsLoading(false);
  };

  const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length;
  const charCount = content.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center space-x-4 mb-6">
              {/* <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div> */}
              <div className="text-left">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-900  to-indigo-800 bg-clip-text text-transparent">
                  Create New Blog
                </h1>
                <p className="text-gray-600 mt-2">Share your thoughts with the world</p>
              </div>
            </div>

            {/* Back Button */}
            {/* <div className="flex justify-center mb-6">
              <a
                href="/manage-blogs"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Manage Blogs</span>
              </a>
            </div> */}
          </div>

          {/* Form Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Error Message */}
            {error && (
              <div className="p-6 bg-red-50/80 backdrop-blur-sm border-b border-red-200/50">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-red-700">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleAddBlog} className="p-8 space-y-8">
              {/* Title Input */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3" />
                  </svg>
                  <span>Blog Title</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your blog title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-6 py-4 text-lg bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 focus:border-blue-400 transition-all duration-300 placeholder-gray-400"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="text-sm text-gray-400">{title.length}/100</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Choose a compelling title that captures your blog's essence</p>
              </div>

              {/* Content Textarea */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Blog Content</span>
                </label>
                <div className="relative">
                  <textarea
                    placeholder="Start writing your amazing content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 focus:border-blue-400 transition-all duration-300 placeholder-gray-400 resize-none"
                    rows={12}
                    required
                  />
                  <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-sm text-gray-400">
                    <span>{wordCount} words</span>
                    <span>•</span>
                    <span>{charCount} characters</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Write engaging content that provides value to your readers</p>
              </div>

              {/* Stats Section */}
              <div className="bg-gray-50/50 rounded-xl p-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{title.length}</div>
                  <div className="text-sm text-gray-600">Title Characters</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{wordCount}</div>
                  <div className="text-sm text-gray-600">Word Count</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{charCount}</div>
                  <div className="text-sm text-gray-600">Total Characters</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200/50">
                {/* Cancel Button */}
                <a
                  href="/manage-blogs"
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-800 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gray-300"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Cancel</span>
                  </span>
                </a>

                {/* Save Draft Button */}
                {/* <button
                  type="button"
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 hover:text-blue-800 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    <span>Save Draft</span>
                  </span>
                </button> */}

                {/* Publish Button */}
                <button
                  type="submit"
                  disabled={isLoading || !title.trim() || !content.trim()}
                  className="group relative flex-1 inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {isLoading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>Publish Blog</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                </button>
              </div>
            </form>
          </div>

          {/* Tips Section
          <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Writing Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Use a clear, engaging title that summarizes your main point</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Structure your content with paragraphs and subheadings for readability</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Aim for 300+ words for better engagement and SEO performance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Include personal insights and practical examples to add value</span>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}