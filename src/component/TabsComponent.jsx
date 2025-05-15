import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const TabsComponent = () => {
  const tabItems = [
    { id: "tasks", label: "Tasks" },
    { id: "completed", label: "Completed" },
    { id: "Uncompleted", label: "UnCompleted" },
  ];

  return (
    <Tabs defaultValue="tasks">
      <TabsList>
        {tabItems.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
