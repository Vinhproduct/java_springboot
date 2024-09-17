package com.nguyenvanvinh.example05.payloads;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class CartDTO {
private Long cartId;
private Double totalPrice = 0.0;
private List<ProductDTO> products = new ArrayList<>();
// private List<ProductDTO> categories = new ArrayList<>();
private String userEmail;
private String categoryName;
// private Long userId;
// public String getUserEmail() {
//     return this.userEmail;
// }

// public void setUserEmail(String userEmail) {
//     this.userEmail = userEmail;
// }

}
