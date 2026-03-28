import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogs.json";

const Blog = () => {
  return (
    <div className="pt-8 pb-20">
      <section className="bg-brand-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            School Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg"
          >
            Insights, news, and updates from the ABCD community.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {blog.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-brand-blue transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center font-semibold text-brand-red hover:text-red-700 transition-colors mt-auto"
                >
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {blogsData.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No blog posts available at the moment.
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
