import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactElement } from "react";

export interface TabProps {
  title: string;
  content: JSX.Element;
}

function Tab({ tabsHeading, data }: { tabsHeading: string; data: TabProps[] }) {
  return (
    <div className="tab-section">
      <h3>{tabsHeading}</h3>
      <Tabs defaultValue={data[0].title} className="overflow-auto whitespace-nowrap">
        <TabsList className="md:flex gap-6 navigation">
          {data?.map((item, index) => (
            <TabsTrigger key={index} value={item.title}>
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.map((item, index) => (
          <TabsContent key={index} value={item.title} className="w-full p-0">
            {item.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Tab;
