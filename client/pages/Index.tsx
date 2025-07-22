import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  Download,
  Upload,
  Trash2,
  Plus,
  User,
  LogOut,
  ChevronDown,
  ArrowUpDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VehicleData {
  id: number;
  brand: string;
  country: string;
  vehicles: number;
  website: string;
  selected: boolean;
}

const initialData: VehicleData[] = [
  {
    id: 1,
    brand: "Volkswagen Group",
    country: "Germany",
    vehicles: 10126281,
    website: "http://vwag.com/",
    selected: false,
  },
  {
    id: 2,
    brand: "BMW",
    country: "Germany",
    vehicles: 2359708,
    website: "http://bmw.com/",
    selected: false,
  },
  {
    id: 3,
    brand: "Toyota",
    country: "Japan",
    vehicles: 10213486,
    website: "http://toyota.com/",
    selected: false,
  },
  {
    id: 4,
    brand: "General Motors",
    country: "United States",
    vehicles: 9937434,
    website: "http://gm.com/",
    selected: false,
  },
  {
    id: 5,
    brand: "Ford",
    country: "United States",
    vehicles: 6429485,
    website: "http://ford.com/",
    selected: false,
  },
  {
    id: 6,
    brand: "Honda",
    country: "Japan",
    vehicles: 4999266,
    website: "http://honda.com/",
    selected: false,
  },
  {
    id: 7,
    brand: "Volkswagen Group",
    country: "Germany",
    vehicles: 10126281,
    website: "http://vwag.com/",
    selected: false,
  },
  {
    id: 8,
    brand: "BMW",
    country: "Germany",
    vehicles: 2359708,
    website: "http://bmw.com/",
    selected: false,
  },
  {
    id: 9,
    brand: "Toyota",
    country: "Japan",
    vehicles: 10213486,
    website: "http://toyota.com/",
    selected: false,
  },
  {
    id: 10,
    brand: "General Motors",
    country: "United States",
    vehicles: 9937434,
    website: "http://gm.com/",
    selected: false,
  },
  {
    id: 11,
    brand: "Ford",
    country: "United States",
    vehicles: 6429485,
    website: "http://ford.com/",
    selected: false,
  },
  {
    id: 12,
    brand: "Honda",
    country: "Japan",
    vehicles: 4999266,
    website: "http://honda.com/",
    selected: false,
  },
  {
    id: 13,
    brand: "Volkswagen Group",
    country: "United States",
    vehicles: 9937434,
    website: "http://vwag.com/",
    selected: false,
  },
  {
    id: 14,
    brand: "BMW",
    country: "United States",
    vehicles: 6429485,
    website: "http://bmw.com/",
    selected: false,
  },
];

export default function Index() {
  const [data, setData] = useState<VehicleData[]>(initialData);
  const [activeTab, setActiveTab] = useState("companies");
  const [selectedCount, setSelectedCount] = useState(0);

  const handleSelectAll = (checked: boolean) => {
    const updatedData = data.map((item) => ({ ...item, selected: checked }));
    setData(updatedData);
    setSelectedCount(checked ? data.length : 0);
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, selected: checked } : item,
    );
    setData(updatedData);
    setSelectedCount(updatedData.filter((item) => item.selected).length);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      Germany: "🇩🇪",
      Japan: "🇯🇵",
      "United States": "🇺🇸",
    };
    return flags[country] || "🌍";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-semibold text-lg">Kpbase</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-3">
            <span className="text-sm text-gray-600 hidden sm:block">
              Philip
            </span>
            <Button variant="ghost" size="sm" className="text-gray-600">
              <LogOut className="w-4 h-4 sm:mr-1" />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white px-4 sm:px-6 py-2 border-b border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600 overflow-x-auto">
          <span className="whitespace-nowrap">Philip</span>
          <span>/</span>
          <span className="whitespace-nowrap">Projects</span>
          <span>/</span>
          <span className="text-gray-900 font-medium whitespace-nowrap">
            Vehicles
          </span>
          <div className="flex items-center space-x-1 ml-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
            <div className="overflow-x-auto">
              <TabsList className="bg-gray-100 w-full sm:w-auto">
                <TabsTrigger
                  value="companies"
                  className="px-2 sm:px-4 text-xs sm:text-sm"
                >
                  Companies
                </TabsTrigger>
                <TabsTrigger
                  value="models"
                  className="px-2 sm:px-4 text-xs sm:text-sm"
                >
                  Models
                </TabsTrigger>
                <TabsTrigger
                  value="engines"
                  className="px-2 sm:px-4 text-xs sm:text-sm"
                >
                  Engines
                </TabsTrigger>
                <TabsTrigger
                  value="prices"
                  className="px-2 sm:px-4 text-xs sm:text-sm"
                >
                  Prices
                </TabsTrigger>
                <TabsTrigger
                  value="social"
                  className="px-2 sm:px-4 text-xs sm:text-sm"
                >
                  Social
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <Badge
                variant="secondary"
                className="bg-red-100 text-red-700 hover:bg-red-100"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                Changes
              </Badge>
              <span className="text-sm text-gray-500">15</span>
            </div>
          </div>

          <TabsContent value="companies">
            {/* Toolbar */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 border-b border-gray-100 space-y-3 lg:space-y-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <Filter className="w-4 h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Add filter</span>
                    <span className="sm:hidden">Filter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <Download className="w-4 h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Download CSV</span>
                    <span className="sm:hidden">Download</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <Upload className="w-4 h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Upload CSV</span>
                    <span className="sm:hidden">Upload</span>
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {selectedCount > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 text-xs sm:text-sm"
                    >
                      <Trash2 className="w-4 h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">
                        Delete selected ({selectedCount})
                      </span>
                      <span className="sm:hidden">
                        Delete ({selectedCount})
                      </span>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Add column</span>
                    <span className="sm:hidden">Column</span>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Add record</span>
                    <span className="sm:hidden">Record</span>
                  </Button>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-gray-100">
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedCount === data.length}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead className="text-left font-medium text-gray-700 min-w-[120px]">
                        <div className="flex items-center space-x-1">
                          <span>Brand</span>
                          <ArrowUpDown className="w-3 h-3 text-gray-400" />
                        </div>
                      </TableHead>
                      <TableHead className="text-left font-medium text-gray-700 min-w-[100px]">
                        <div className="flex items-center space-x-1">
                          <span>Country</span>
                          <ArrowUpDown className="w-3 h-3 text-gray-400" />
                        </div>
                      </TableHead>
                      <TableHead className="text-left font-medium text-gray-700 min-w-[80px]">
                        <div className="flex items-center space-x-1">
                          <span>Vehicles</span>
                          <ArrowUpDown className="w-3 h-3 text-gray-400" />
                        </div>
                      </TableHead>
                      <TableHead className="text-left font-medium text-gray-700 min-w-[140px]">
                        <div className="flex items-center space-x-1">
                          <span>Website</span>
                          <ArrowUpDown className="w-3 h-3 text-gray-400" />
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow
                        key={row.id}
                        className={cn(
                          "hover:bg-gray-50 border-b border-gray-50",
                          row.selected && "bg-blue-50",
                        )}
                      >
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              checked={row.selected}
                              onCheckedChange={(checked) =>
                                handleSelectRow(row.id, checked as boolean)
                              }
                            />
                            <span className="text-xs text-gray-400 w-4 text-center">
                              {index + 1}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium text-gray-900">
                          {row.brand}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">
                              {getCountryFlag(row.country)}
                            </span>
                            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                              {row.country}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-900">
                          {formatNumber(row.vehicles)}
                        </TableCell>
                        <TableCell>
                          <a
                            href={row.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {row.website}
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-t border-gray-100 text-sm text-gray-600 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">
                    Philip added data on 8 Oct 2018
                  </span>
                </div>
                <span className="text-xs sm:text-sm">
                  {data.length} records
                </span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="models">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Models Tab
                </h3>
                <p className="text-gray-600 mb-4">
                  This tab is not yet implemented. Continue prompting to add
                  content here.
                </p>
                <Button variant="outline">Add Models Data</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="engines">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Engines Tab
                </h3>
                <p className="text-gray-600 mb-4">
                  This tab is not yet implemented. Continue prompting to add
                  content here.
                </p>
                <Button variant="outline">Add Engines Data</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="prices">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Prices Tab
                </h3>
                <p className="text-gray-600 mb-4">
                  This tab is not yet implemented. Continue prompting to add
                  content here.
                </p>
                <Button variant="outline">Add Pricing Data</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="social">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Social Tab
                </h3>
                <p className="text-gray-600 mb-4">
                  This tab is not yet implemented. Continue prompting to add
                  content here.
                </p>
                <Button variant="outline">Add Social Data</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
