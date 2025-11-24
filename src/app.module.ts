import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Restaurant } from './entities/restaurant.entity';
import { MenuItem } from './entities/menu-item.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'bitenow',
      entities: [Restaurant, MenuItem, Order, OrderItem],
      synchronize: true, // Only for development!
    }),
    TypeOrmModule.forFeature([Restaurant, MenuItem, Order, OrderItem]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
