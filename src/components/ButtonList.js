import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Gaming",
  "News",
  "Comedy",
  "Cricket",
  "Podcast",
  "Shark Tank",
  "Recently Uploaded",
  "New to you"
];

const ButtonList = () => {
  return (
    <div className="p-4 flex flex-wrap">
      {list.map((item, index) => (
        <Button key={index} label={item} />
      ))}
    </div>
  );
};

export default ButtonList;
