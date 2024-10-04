export default function Tag() {
  const tags = [
    "Travel",
    "Home",
    "Office",
    "Kitchen",
    "Fashion",
    "Furniture",
    "Books",
    "Lighting",
    "Tech",
    "Decor",
    "Bath & Bed",
    "More",
  ];
  return (
    <>
      <div className=" my-40  space-y-3  flex-col gap-3 ">
        <div className="flex  items-center justify-center gap-3" >
        {tags?.slice(0,5).map((text, idx) => (
          <button
            key={idx}
            className="text-5xl px-6 py-1 leading-none rounded-full font-medium border border-[#2e2a27] text-[#2e2a27]"
          >
            {text}
          </button>
        ))}
        </div>
        <div className="flex  items-center justify-center gap-3" >
        {tags?.slice(5,10).map((text, idx) => (
          <button
            key={idx}
            className="text-5xl px-6 py-1 leading-none rounded-full font-medium border border-[#2e2a27] text-[#2e2a27]"
          >
            {text}
          </button>
        ))}
        </div>
        <div className="flex  items-center justify-center gap-3" >
        {tags?.slice(10,12).map((text, idx) => (
          <button
            key={idx}
            className="text-5xl px-6 py-1 leading-none rounded-full font-medium border border-[#2e2a27] text-[#2e2a27]"
          >
            {text}
          </button>
        ))}
        </div>
      </div>
    </>
  );
}
