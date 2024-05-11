interface IProjectPlatformBadgeProps {
  platforms: string[];
}

const ProjectPlatformsBadge = ({ platforms }: IProjectPlatformBadgeProps) => {
  return (
    <div>
      {platforms.map((platform) => (
        <span
          key={platform}
          className="mr-2 capitalize bg-green-500 p-1 rounded-md text-center w-20"
        >
          {platform}
        </span>
      ))}
    </div>
  );
};

export default ProjectPlatformsBadge;
