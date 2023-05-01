import {
  Photo,
  StarOutline,
  SendOutlined,
  InsertDriveFileOutlined,
  DeleteOutlined,
  MailOutlined,
} from "@mui/icons-material";

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    label: "Inbox",
    icon: Photo,
  },
  {
    name: "starred",
    label: "Starred",
    icon: StarOutline,
  },
  {
    name: "sent",
    label: "Sent",
    icon: SendOutlined,
  },
  {
    name: "draft",
    label: "Draft",
    icon: InsertDriveFileOutlined,
  },
  {
    name: "bin",
    label: "Bin",
    icon: DeleteOutlined,
  },
  {
    name: "allmails ",
    label: "All Mails",
    icon: MailOutlined,
  },
];
