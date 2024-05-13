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
      <h3 className="p-3">Trending in Travel</h3>
      <TabsList className="md:flex p-3 gap-4 w-[400px]  ">
        {data?.map((item, index) => (
          <TabsTrigger key={index} value={item.title}>
            {item.title === "Spring Destinations" ? (
              <span className="underline">{item.title}</span>
            ) : (
              item.title
            )}
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
