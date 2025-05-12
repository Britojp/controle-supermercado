import { dataSourceOptions } from "./database.module";
import {DataSource} from 'typeorm'
import { States1747073297712 } from "./migrations/1747073297712-states";
import { Categories1747073314154 } from "./migrations/1747073314154-categories";
import { Brands1747073326693 } from "./migrations/1747073326693-brands";
import { Shelves1747073344827 } from "./migrations/1747073344827-shelves";
import { Contacts1747073357744 } from "./migrations/1747073357744-contacts";
import { Nutritions1747073374300 } from "./migrations/1747073374300-nutritions";
import { Products1747073390324 } from "./migrations/1747073390324-products";
import { Address1747073409336 } from "./migrations/1747073409336-address";
import { Suppliers1747073422576 } from "./migrations/1747073422576-suppliers";
import { Transactions1747073442693 } from "./migrations/1747073442693-transactions";
import { Batches1747073459152 } from "./migrations/1747073459152-batches";
import { Corridors1747073482334 } from "./migrations/1747073482334-corridors";
import { StockLocations1747073502452 } from "./migrations/1747073502452-stock_locations";
import { Measurements1747073243217 } from "./migrations/1747073243217-measurement";
import { Users1747073285554 } from "./migrations/1747073285554-users";




export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations:[
        Measurements1747073243217,
        Users1747073285554,
        States1747073297712,
        Categories1747073314154,
        Brands1747073326693,
        Shelves1747073344827,
        Contacts1747073357744,
        Nutritions1747073374300,
        Products1747073390324,
        Address1747073409336,
        Suppliers1747073422576,
        Transactions1747073442693,
        Batches1747073459152,
        Corridors1747073482334,
        StockLocations1747073502452

    ],
})

