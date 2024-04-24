import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserByRole } from "@/types/types";

export interface CounterCardProps {
  items: UserByRole[];
}

export default function CounterCards({ items }: CounterCardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-indigo-800">{item.title}</CardTitle>
            {item.icon && <item.icon className="w-6 h-6 text-indigo-800" />}
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <div className="text-2xl font-bold text-gray-600">
              {item.symbol}
              {item.count}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
