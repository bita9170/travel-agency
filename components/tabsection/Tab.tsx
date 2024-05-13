import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabProps {
  title: string;
  content: JSX.Element;
}
function Tab({
  data,
  defaultValue,
}: {
  data: TabProps[];
  defaultValue: string;
}) {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList className="flex gap-4 w-[400px]">
        {data?.map((item, index) => (
          <TabsTrigger key={index} value={item.title}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {data?.map((item, index) => (
        <TabsContent key={index} value={item.title} className="w-full">
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default Tab;
