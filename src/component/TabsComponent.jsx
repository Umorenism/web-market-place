import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useNavigate } from "react-router-dom";
export const TabsComponent = () => {
   const navigate = useNavigate();
  const tabItems = [
    { id: "tasks", label: "Tasks", route: "/tasks" },
    { id: "completed", label: "Completed", route: "/completed-task" },
    { id: "Uncompleted", label: "UnCompleted", route: "/tasks" },
  ];

  return (
    <Tabs defaultValue="tasks">
      <TabsList>
        {tabItems.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}  onClick={() => navigate(tab.route)}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
