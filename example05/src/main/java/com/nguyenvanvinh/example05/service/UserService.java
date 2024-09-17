package com.nguyenvanvinh.example05.service;

import com.nguyenvanvinh.example05.payloads.UserDTO;
import com.nguyenvanvinh.example05.payloads.UserReponse;

public interface UserService {
    UserDTO registerUser(UserDTO userDTO);

    UserReponse getAllUsers(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);

    UserDTO getUserById(Long userId);

    UserDTO updateUser(Long userId, UserDTO userDTO);

    String deleteUser(Long userId);

    UserDTO getUserByEmail(String email);  // Thêm phương thức này
}
