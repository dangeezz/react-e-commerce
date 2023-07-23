export const Breadcrumb = () => {
  const links = [
    "Electronics",
    "Audio",
    "Shop Headphone by type",
    "airpods-max",
  ];
  return (
    <ul className="flex items-center gap-2">
      {links.map((item) => (
        <li className="text-gray-600 after:content-['/'] after:px-2 last:font-semibold last:text-gray-900 last:after:content-none">
          {item}
        </li>
      ))}
    </ul>
  );
};
