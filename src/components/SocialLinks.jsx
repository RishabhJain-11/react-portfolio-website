export default function SocialLinks() {
  const links = [
    { text: "@rmjtweet", link: "https://x.com/rmjtweet" },
    { text: "leetcode", link: "#" },
    { text: "linkedin", link: "#" },
    { text: "github", link: "#" },
  ];

  return (
    <div className="mt-6 flex justify-center space-x-6 text-gray-400 text-sm">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.text}
        </a>
      ))}
    </div>
  );
}
