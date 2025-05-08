import { User1746714963417 } from "src/database/migrations/1746714963417-user";
import { dataSourceOptions } from "./database.module";
import {DataSource} from 'typeorm'
import { Transaction1746714971472 } from "src/database/migrations/1746714971472-transaction";
import { Supplier1746714980853 } from "src/database/migrations/1746714980853-supplier";
import { StockLocation1746714987549 } from "src/database/migrations/1746714987549-stock_location";
import { State1746714992379 } from "src/database/migrations/1746714992379-state";
import { Shelf1746714999303 } from "src/database/migrations/1746714999303-shelf";
import { Product1746715003403 } from "src/database/migrations/1746715003403-product";
import { Nutrition1746715009814 } from "src/database/migrations/1746715009814-nutrition";
import { Measurement1746715019608 } from "src/database/migrations/1746715019608-measurement";
import { Corridor1746715026418 } from "src/database/migrations/1746715026418-corridor";
import { Contact1746715033332 } from "src/database/migrations/1746715033332-contact";
import { Category1746715037902 } from "src/database/migrations/1746715037902-category";
import { Brand1746715043240 } from "src/database/migrations/1746715043240-brand";
import { Batch1746715048741 } from "src/database/migrations/1746715048741-batch";
import { Address1746715054964 } from "src/database/migrations/1746715054964-address";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations:[
        User1746714963417,
        Transaction1746714971472,
        Supplier1746714980853,
        StockLocation1746714987549,
        State1746714992379,
        Shelf1746714999303,
        Product1746715003403,
        Nutrition1746715009814,
        Measurement1746715019608,
        Corridor1746715026418,
        Contact1746715033332,
        Category1746715037902,
        Brand1746715043240,
        Batch1746715048741,
        Address1746715054964,
    ],
})

