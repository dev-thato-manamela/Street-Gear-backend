import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.model';


@Injectable()
export class ProductsService 
{
    constructor(@InjectModel('Product') private readonly __productmodel: Model<Product> ){}

    //Adding new product
    async addProduct(product: any)
    {
		try 
        {
			const product_model = new this.__productmodel(product);
			return await product_model.save();
		} catch (error) 
        {
			throw new BadRequestException(error);
		}
	}

	async getAllProducts(){
		return (await this.__productmodel.find().exec()).map((product: any) => ({ id: product.id, name: product.name, image: product.image, price: product.price, category: product.category,reviews: product.reviews,status: product.status }));

	}
}
