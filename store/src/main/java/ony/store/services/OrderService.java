package ony.store.services;

import ony.store.entities.DeliveryInfo;
import ony.store.entities.PurchaseOrder;
import ony.store.entities.Users;
import ony.store.repositories.DeliveryInfoRepo;
import ony.store.repositories.OrderRepository;
import ony.store.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderService {

    OrderRepository orderRepository;
    UsersRepository usersRepository;
    DeliveryInfoRepo deliveryInfoRepo;

    @Autowired
    public OrderService(OrderRepository orderRepository, UsersRepository usersRepository, DeliveryInfoRepo deliveryInfoRepo) {
        this.orderRepository = orderRepository;
        this.usersRepository = usersRepository;
        this.deliveryInfoRepo = deliveryInfoRepo;
    }




    public void createOrder(PurchaseOrder order){
        DeliveryInfo deliveryInfo = order.getDeliveryInfo();
        deliveryInfoRepo.save(deliveryInfo);
        order.setDeliveryInfo(deliveryInfoRepo.findById(deliveryInfo.getId()).get());

        order.setOrderDateTime(new Date());
        orderRepository.save(order);
    }

    public List<PurchaseOrder> getOrders(String username){
        Users user = usersRepository.findByUsername(username).get();
        return orderRepository.getOrdersByUsers(user);
    }
}
