import { Button } from "@/components/ui/button";
import { ArrowRight, Search, X } from "lucide-react";
import { TableRow, TableCell } from "@/components/ui/table";

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Button variant="outline" size="xs">
                    <Search className="h-3 w-3"/>
                    <span className="sr-only">Detalhes do Pedido</span>
                </Button>
            </TableCell>
            <TableCell className="text-sm font-medium">as09uj01j2890u</TableCell>
            <TableCell className="text-muted-foreground">
                há 15 minutos
            </TableCell>
            <TableCell className="">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                    <span className="font-medium text-muted-foreground">
                        Pendente
                    </span>
                </div>
            </TableCell>
            <TableCell className="font-medium">Renato Barbosa</TableCell>
            <TableCell className="font-medium">
                R$ 149,90
            </TableCell>
            <TableCell>
                <Button variant="outline" size="xs">
                    <ArrowRight className="bg-green-400 h-3 w-3 mr-2"/>
                    Aprovar
                </Button>
            </TableCell>
            <TableCell className="">
                <Button variant="ghost" size="xs">
                    <X className="bg-red-400 h-3 w-3 mr-2"/>
                    Cancelar
                </Button>
            </TableCell>
        </TableRow> 
    )
}