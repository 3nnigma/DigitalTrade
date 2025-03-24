import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Box, PackageOpen } from "lucide-react";

const invoices = [
  // {
  //   invoice: "INV001",
  //   paymentStatus: "Paid",
  //   totalAmount: "$250.00",
  //   paymentMethod: "Credit Card",
  // },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
             <TableRow>
               <TableHead className="w-[100px]">Invoice</TableHead>
               <TableHead>Status</TableHead>
               <TableHead>Method</TableHead>
               <TableHead className="text-right">Amount</TableHead>
             </TableRow>
           </TableHeader>
      {invoices.length ? (
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      ) : (
        <TableRow className="h-48 font-medium   text-lg text-center hover:bg-transparent">
          <TableCell colSpan={4}>
            <span className="flex justify-center flex-col text-neutral-400 items-center">
              <PackageOpen className="mb-2"/>
              There are empty yet
            </span>
          </TableCell>
        </TableRow>
      )}
      {invoices.length ? (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2108.00</TableCell>
          </TableRow>
        </TableFooter>
      ) : (
        ""
      )}
    </Table>
  );
}
