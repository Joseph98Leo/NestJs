import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    // readonly para que no modifique algo que apunte

    constructor(
        private readonly carsService: CarsService // inyeccion de dependencias
    ) {}

    @Get()
    getAllCars(){ 
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id',ParseIntPipe) id: number ){
        console.log({ id })
        // return this.cars[id]
        // return this.carsService.findOneById( Number(id) )
        return this.carsService.findOneById( id )
    }

    @Post()
    createCar( @Body() body: any ){
        return body;
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any ){
        return body;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number ){
        return {
            method: 'delete',
            id
        }
    }

}
