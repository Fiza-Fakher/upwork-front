import React, { useState } from "react";
import { Check } from "lucide-react";
import {
  clientFields,
  freelancerFields,
  settingsFields,
  projectFields,
} from "../../constant";


const API = import.meta.env.VITE_API_URL;

export default function ProposalGenerator() {
  const [formData, setFormData] = useState({
    clientName: "",
    jobPost: "",
    freelancerName: "",
    github: "",
    email: "",
    experience: "Professional",
    complexity: "Medium",
    language: "English",
    budget: "",
    timeline: "",
    additionalDetails: "",
  });

  const [proposal, setProposal] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      setProposal("");

      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to generate proposal");
      }

      const data = await res.json();

      
      setProposal(data.proposal || "");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field) => {
    if (field.type === "textarea") {
      return (
        <textarea
          key={field.name}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
          rows={field.rows || 3}
          className="w-full bg-[var(--primary)] shadow-md rounded-xl border border-[var(--border)] px-4 py-2.5  placeholder-gray-500 focus:outline-none focus:border-blue-500 mb-4 resize-none"
        />
      );
    }

    if (field.type === "select") {
      return (
        <select
          key={field.name}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          className="w-full bg-[var(--primary)] shadow-sm rounded-lg border border-[var(--border)] px-4 py-2.5  focus:outline-none focus:border-blue-500"
        >
          {field.options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        key={field.name}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={formData[field.name]}
        onChange={handleChange}
        className="w-full bg-[var(--primary)] shadow-md rounded-xl border border-[var(--border)] px-4 py-2.5  placeholder-gray-500 focus:outline-none focus:border-blue-500 mb-4"
      />
    );
  };

  return (
    <div className="min-h-screen bg-[var(--primary)]  p-8 py-10 pb-10">
      <h1 className="text-4xl font-bold text-center mb-12">
        See AI Magic in Action
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div className="bg-[var(--primary)] shadow-lg border border-[var(--border)] rounded-xl p-6 space-y-6">
          <h2 className="text-xl font-semibold mb-6">Your Details</h2>

          {/* Client Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">
              Client Details
            </h3>
            {clientFields.map(renderField)}
          </div>

          {/* Freelancer Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">
              Freelancer
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {freelancerFields.slice(0, 2).map(renderField)}
            </div>
            {renderField(freelancerFields[2])}
          </div>

          {/* Settings Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">
              Settings
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {settingsFields.map(renderField)}
            </div>
          </div>

          {/* Project Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">
              Project Details
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {projectFields.slice(0, 2).map(renderField)}
            </div>
            {renderField(projectFields[2])}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
          >
            {loading ? "Generating..." : "Generate Proposal"}
          </button>

          {error && (
            <p className="text-red-400 text-sm pt-2">
              {error}
            </p>
          )}
        </div>

        {/* Right Column - AI Proposal */}
        <div className="bg-[#F1F6FF] rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-6">AI Generated Proposal</h2>

          <div className="space-y-4 text-[var(--text)] text-sm leading-relaxed whitespace-pre-line">
            {proposal ? (
              <p>{proposal}</p>
            ) : (
              <>
                <p>
                  <span className="font-semibold text-black">
                    Dear Hiring Manager,
                  </span>
                </p>
                <p>
                  I'm excited to apply for your project. With my extensive
                  experience in the required technologies and a proven track
                  record of successful deliveries, I'm confident I can exceed your
                  expectations.
                </p>
                <p>
                  I've carefully reviewed your job posting and understand the
                  project requirements perfectly. My approach combines technical
                  excellence with clear communication to ensure project success.
                </p>
                <p>
                  Looking forward to discussing how I can contribute to your
                  project's success.
                </p>
                <p>
                  <span className="font-semibold">Best regards,</span>
                  <br />
                  <span className="font-semibold">[Your Name]</span>
                </p>
              </>
            )}

            <div className="flex items-center gap-2 text-sm pt-4">
              <div className="flex items-center gap-1">
                <Check size={16} className="text-green-400" />
                <span>Optimized</span>
              </div>
              <span className="text-gray-500">/</span>
              <div className="flex items-center gap-1">
                <Check size={16} className="text-green-400" />
                <span>Professional</span>
              </div>
              <span className="text-gray-500">/</span>
              <div className="flex items-center gap-1">
                <Check size={16} className="text-green-400" />
                <span>Ready to send</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center pt-12">
        ✨ AI learns from 10,000+ winning proposals to create yours
      </h1>
    </div>
  );
}