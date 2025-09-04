import Image from "next/image";
import React from "react";

// Upliftt Thumbnail - Video with overlay elements
const UplifttThumbnail = ({ project, index, hover }) => {
  const { video, color, image } = project;

  return (
    <div
      className={`flex overflow-hidden relative justify-center items-center w-full h-full`}
    >
      <div className="flex justify-between items-center w-full h-[30vh] sm:h-[40vh] md:h-[60vh] xl:h-[70vh] gap-4 ">
        {image && (
          <div className="hidden md:flex flex-1 justify-center items-center h-full rounded-2xl bg-[#648947]">
            <Image
              src={image}
              alt={project.title}
              draggable="false"
              className={`object-fill`}
              priority={index < 2}
            />
          </div>
        )}
        {video && (
          <div
            className="flex overflow-hidden justify-center items-center flex-[2] h-full rounded-2xl py-2 md:py-6"
            style={{
              backgroundImage: `url(${project.background.src})`,
            }}
          >
            <div
              className={`overflow-hidden relative z-20 w-auto h-full rounded-3xl duration-500 md:rounded-[40px] ${hover} ease-card`}
            >
              <video
                src={video}
                className={`object-contain z-20 w-full h-full`}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Teammie Thumbnail - Image with side panel
const TeammieThumbnail = ({ project, index, hover }) => {
  const { image, color } = project;

  return (
    <div
      className={`flex overflow-hidden relative justify-center items-center w-full h-full`}
      style={{ backgroundColor: color }}
    >
      {/* Main image */}
      <div className="flex justify-between w-full items-center gap-4 h-[30vh] sm:h-[40vh] md:h-[60vh] xl:h-[70vh]  ">
        {image && (
          <>
            {/* Main image - full expansion */}
            <div className="flex flex-[2] relative justify-center items-center w-full h-full overflow-hidden  rounded-2xl ">
              <Image
                src={image[0]}
                alt={`${project.title} - desktop`}
                draggable="false"
                className={`object-contain object-center overflow-hidden z-20 w-full h-full duration-500 ${hover} ease-card`}
                priority={index < 2}
              />

              <div
                className={`overflow-hidden absolute top-0 left-0 justify-center items-center w-full h-full`}
                style={{
                  backgroundImage: `url(${project.background.src})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            {/* Second image - square style */}
            <div className=" hidden  flex-1  justify-center items-center h-full rounded-2xl md:flex md:flex-1 bg-[#205e59]">
              <Image
                src={image[1]}
                alt={`${project.title} - mobile`}
                draggable="false"
                className={`object-contain object-center w-full h-full duration-500 ${hover} ease-card`}
                priority={index < 2}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Casetify Thumbnail - Grid layout with multiple elements
const CasetifyThumbnail = ({ project, index, hover }) => {
  const { image, color } = project;

  return (
    <div
      className={`flex overflow-hidden relative justify-center items-center w-full h-full`}
      style={{ backgroundColor: color }}
    >
      {/* Main image - full expansion */}
      <div
        className="flex justify-center items-center h-[30vh] sm:h-[40vh] gap-4
       md:h-[60vh] xl:h-[70vh] w-full rounded-2xl "
      >
        {image && (
          <>
            {/* Main image - full expansion */}
            <div className=" hidden justify-center items-center h-full rounded-2xl md:flex flex-1 bg-[#f6c335]">
              <Image
                src={image[1]}
                alt={`${project.title} - mobile`}
                draggable="false"
                className={`object-contain object-center w-full h-full duration-500 ${hover} ease-card`}
                priority={index < 2}
              />
            </div>

            {/* Second image - square style */}

            <div className="flex flex-[2] relative justify-center items-center h-full overflow-hidden  rounded-2xl ">
              <Image
                src={image[0]}
                alt={`${project.title} - desktop`}
                draggable="false"
                className={`object-contain object-center overflow-hidden z-20 w-full h-full duration-500 ${hover} ease-card`}
                priority={index < 2}
              />

              <div
                className={`overflow-hidden absolute top-0 left-0 justify-center items-center w-full h-full backdrop-blur-md`}
                style={{
                  backgroundImage: `url(${project.background.src})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// GradMatch Thumbnail - Card-style layout
const GradMatchThumbnail = ({ project, index, hover }) => {
  const { image, color } = project;

  return (
    <div
      className={`flex overflow-hidden relative justify-center items-center w-full h-full`}
      style={{ backgroundColor: color }}
    >
      {/* Main content */}
      <div className="flex justify-between items-center w-full gap-4 h-[30vh] sm:h-[40vh] md:h-[60vh] xl:h-[70vh]  ">
        {image && (
          <>
            {/* Main image - full expansion */}
            <div
              className="flex overflow-hidden flex-[2] justify-center items-center h-full rounded-2xl bg-center"
              style={{
                backgroundImage: `url(${project.background.src})`,
                backgroundSize: "cover",
              }}
            >
              <Image
                src={image[0]}
                alt={`${project.title} - desktop`}
                draggable="false"
                className={`object-contain object-center w-full h-full duration-500 ${hover} ease-card`}
                priority={index < 2}
              />
            </div>

            {/* Second image - square style */}
            <div className="  hidden overflow-hidden justify-center items-center flex-1 h-full rounded-2xl md:flex bg-[#ABDDFE]">
              <Image
                src={image[1]}
                alt={`${project.title} - mobile`}
                draggable="false"
                className={`object-contain object-center w-full h-full duration-500 ${hover} ease-card`}
                priority={index < 2}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Main component that selects the appropriate thumbnail
const ProjectImageThumbnail = ({ project, index, hover }) => {
  const { id } = project;

  switch (id) {
    case "upliftt":
      return <UplifttThumbnail project={project} index={index} hover={hover} />;
    case "teammie":
      return <TeammieThumbnail project={project} index={index} hover={hover} />;
    case "casetify":
      return (
        <CasetifyThumbnail project={project} index={index} hover={hover} />
      );
    case "gradmatch":
      return (
        <GradMatchThumbnail project={project} index={index} hover={hover} />
      );
    default:
      return <UplifttThumbnail project={project} index={index} hover={hover} />;
  }
};

export default ProjectImageThumbnail;
