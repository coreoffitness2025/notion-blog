"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone } from "lucide-react";

interface AppDownloadPromptProps {
  type: "inline" | "modal";
  show: boolean;
  onClose: () => void;
  labels: {
    inlineTitle: string;
    inlineDesc: string;
    modalTitle: string;
    modalDesc: string;
    downloadApp: string;
    maybeLater: string;
  };
}

export default function AppDownloadPrompt({
  type,
  show,
  onClose,
  labels,
}: AppDownloadPromptProps) {
  if (!show) return null;

  if (type === "inline") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-2 my-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--corevia-primary)] flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-800">
              {labels.inlineTitle}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {labels.inlineDesc}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block w-full text-center py-2 bg-[var(--corevia-primary)] text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors"
        >
          {labels.downloadApp}
        </a>
      </motion.div>
    );
  }

  // Modal
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {labels.modalTitle}
          </h3>
          <p className="text-sm text-gray-500">
            {labels.modalDesc}
          </p>
          <div className="space-y-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
            >
              {labels.downloadApp}
            </a>
            <button
              onClick={onClose}
              className="block w-full py-3 text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors"
            >
              {labels.maybeLater}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
