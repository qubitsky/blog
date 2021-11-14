/** @jsx jsx */
import { jsx, Flex, NavLink } from "theme-ui";
import PenIcon from "../icons/pen.svg";
import UserIcon from "../icons/user.svg";

const list = [
  {
    icon: <PenIcon />,
    title: "Articles",
    to: "/articles",
  },
  {
    icon: <UserIcon />,
    title: "About",
    to: "/about",
  },
];

const MenuList: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Flex className={className} as="nav">
      {list.map((item, index) => {
        return (
          <NavLink key={index} href={item.to}>
            <Flex
              p={2}
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.icon}
              <span>{item.title}</span>
            </Flex>
          </NavLink>
        );
      })}
    </Flex>
  );
};

export default MenuList;
