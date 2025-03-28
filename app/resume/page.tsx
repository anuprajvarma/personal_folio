import React from "react";

const Resume = () => {
  return (
    <div className="w-full">
      <div className="sm:w-[40rem] w-full m-auto flex flex-col gap-2 pt-10">
        <div className="w-full flex justify-center">
          <a
            href="/resume.pdf"
            download="AnuprajVarma-resume.pdf"
            className="text-md p-4 rounded-md font-medium"
            style={{
              backgroundColor: "var(--bg)",
            }}
          >
            Download My Resume
          </a>
        </div>
        <div className="sm:h-[45rem] h-[35rem]">
          <iframe
            src="https://drive.google.com/file/d/18rfJCbbjdzuMDO3Sj33Z9sm8fkgUW74U/preview"
            allow="autoplay"
            className="w-full h-full p-4"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
