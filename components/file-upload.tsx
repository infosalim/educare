"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CloudUpload } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { toast } from "sonner";

interface UploadDropzoneProps {
  isMulti?: boolean; // Determines if multiple files can be uploaded
  label?: string; // Optional label for the dropzone
}

export const UploadDropzone: React.FC<UploadDropzoneProps> = ({ isMulti = false, label }) => {
  const [droppedFiles, setDroppedFiles] = useState<File[] | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  console.log(droppedFiles);

  // Simulated upload progress utility
  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsUploading(true);
    const progressInterval = startSimulatedProgress();

    setDroppedFiles(acceptedFiles);

    // Simulate a delay to show upload progress
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 3000);
    });

    setUploadProgress(100);
    clearInterval(progressInterval);
    setIsUploading(false);
  }, []);

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    multiple: isMulti,
  });

  useEffect(() => {
    if (fileRejections.length > 1) {
      toast.error("You can only upload one file.");
    } else if (fileRejections.length > 0) {
      toast.error("File upload error.");
    }
  }, [fileRejections]);

  return (
    <div
      {...getRootProps()}
      className={cn(
        "mt-3 flex cursor-pointer items-center justify-center rounded-md border border-dashed p-3 py-12 hover:bg-muted/30",
        isUploading ? "pointer-events-none !cursor-not-allowed opacity-80" : ""
      )}
    >
      <input multiple={isMulti} {...getInputProps()} disabled={isUploading} />
      <div className="flex flex-col items-center gap-3 text-center !text-[#858585]">
        <CloudUpload size={48} className="text-gray-600" />
        <h4 className="!font-normal !text-[#858585]">
          <span className="font-semibold text-black underline">
            Click to upload
          </span>{" "}
          or drag and drop <br />
          Maximum file size 50 MB.
        </h4>
        {/* Optionally, you can include accepted file types */}
        {/* <p>Only *.jpeg and *.png images will be accepted</p> */}
        {isUploading ? (
          <div className="mx-auto mt-4 w-full max-w-xs">
            <Progress
              value={uploadProgress}
              className="h-1 w-full bg-zinc-200"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
