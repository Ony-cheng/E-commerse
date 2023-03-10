package ony.store.services;

import ony.store.entities.Cart;
import ony.store.entities.Product;
import ony.store.entities.Users;
import ony.store.repositories.CartRepository;
import ony.store.repositories.ProductRepo;
import ony.store.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CartService {

    CartRepository cartRepository;
    UsersRepository usersRepository;

    ProductRepo productRepo;

    public CartService(CartRepository cartRepository, UsersRepository usersRepository, ProductRepo productRepo) {
        this.cartRepository = cartRepository;
        this.usersRepository = usersRepository;
        this.productRepo = productRepo;
    }


    //______________________переписати після впровадження  аутентифікації_________________________

    public Cart getCart(String userName){

        Users user = usersRepository.findByUsername(userName).orElse(null);
        if (user == null) {
            return null;
        }
        return cartRepository.findByUsers(user).orElse(null);
    }
    //_____________________________кінець  костиля_______________________________________________




    public void addToCart(int  cartId, Product product){

        Cart cart = cartRepository.findById(cartId).get();
        Map<Integer, Product> products = cart.getProducts();

        Product productToAdd = new Product();
        productToAdd.setId(product.getId());

        products.put(product.getId(),productToAdd);

        cart.setProducts(products);
        cartRepository.save(cart);
    }

    public void removeFromCart( int cartId, int productId){
        Cart cart = cartRepository.findById(cartId).get();
        Map<Integer, Product> products = cart.getProducts();
        products.remove(productId);
        cart.setProducts(products);
        cartRepository.save(cart);
    }
}






















