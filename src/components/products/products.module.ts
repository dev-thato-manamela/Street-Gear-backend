import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdcutsSchema } from './products.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';


@Module({
  imports: [
		MongooseModule.forFeature([{ name: "Product", schema: ProdcutsSchema }]),
	],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
