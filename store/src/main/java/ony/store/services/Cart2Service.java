package ony.store.services;

import ony.store.entities.*;
import ony.store.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class Cart2Service {

    Cart2Repository cartRepository;
    UsersRepository usersRepository;

    CartItemRepository cartItemRepository;
    ProductRepo productRepo;

    public Cart2Service(Cart2Repository cartRepository,
                        UsersRepository usersRepository,
                        ProductRepo productRepo,
                        CartItemRepository cartItemRepository
    ) {
        this.cartRepository = cartRepository;
        this.usersRepository = usersRepository;
        this.productRepo = productRepo;
        this.cartItemRepository = cartItemRepository;
    }
    //______________________переписати після впровадження  аутентифікації_________________________

    public Cart2 getCart(String userName){

        Users user = usersRepository.findByUsername(userName).orElse(null);
        if (user == null) {
            return null;
        }
        return cartRepository.findByUsers(user).orElse(null);
    }
    //_____________________________кінець  костиля_______________________________________________



    public void addToCart(int  cartId, Product product){
        final int DEFAULT_QTY = 1;

        Cart2 cart = cartRepository.findById(cartId).orElse(new Cart2());

        var cartItems = cart.getCartItems();

        CartItem cartItem = new CartItem();

        cartItem.setQuantity(DEFAULT_QTY);

        cartItem.setProduct(product);

        if (cartItems.values().stream().anyMatch(item -> (item.getProduct().getId() == product.getId()))){
            System.out.println("Already in cart");
        }
        else {
            cartItemRepository.save(cartItem);

            cartItems.put(product.getId(), cartItem);

            cart.setCartItems(cartItems);

            cartRepository.save(cart);
        }
    }

    public void updateQty(int cartItemId, int newQty){
       cartItemRepository.updateQty(cartItemId,newQty);
    }

    public void removeFromCart( int cartId, int cartItemId){
        Cart2 cart = cartRepository.findById(cartId).get();
        Map<Integer, CartItem> cartItems = cart.getCartItems();
        cartItems.remove(cartItemId);
        cart.setCartItems(cartItems);
        cartRepository.save(cart);
        cartItemRepository.delete(cartItemRepository.findById(cartItemId).get());
    }
}






















