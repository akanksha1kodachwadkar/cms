"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Blog {
  _id: string;
  title: string;
  content: string;
  authorId?: { name: string };
}

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 space-y-4 sm:space-y-0">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                {/* <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">📊</span>
                </div> */}
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                    Dashboard
                  </h1>
                  <p className="text-gray-600 text-sm mt-1">
                    Manage and view your blog posts
                  </p>
                </div>
              </div>
            </div>
            <div>
            <a
              href="/manage-blogs"
             className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-white hover:to-white text-white px-6 py-3 rounded-xl font-medium transition-all  hover:scale-100 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Manage Blogs</span>
                {/* <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg> */}
              </span>
              {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 blur transition-opacity"></div> */}
            </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mb-10">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{blogs.length}</p>
                    <p className="text-sm text-gray-600">Total Blog Posts</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Last updated</p>
                  <p className="text-sm font-medium text-gray-700">Just now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Blogs Section */}
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No blogs yet</h3>
              <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                Ready to share your thoughts? Create your first blog post and start building your audience.
              </p>
              <a
                href="/add-blog"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-white hover:to-white text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Create Your First Post</span>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={blog._id}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-8">
                    {/* Blog content */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                        {blog.title}
                      </h2>
                      
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {blog.content}
                      </p>
                    </div>

                    {/* Author info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-700">
                            {(blog.authorId?.name || "U").charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {blog.authorId?.name || "Unknown"}
                          </p>
                          <p className="text-xs text-gray-500">Author</p>
                        </div>
                      </div>
                      
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-blue-50 rounded-lg">
                        <svg className="w-4 h-4 text-gray-400 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}