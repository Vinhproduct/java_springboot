import {
    List, Datagrid, TextField, DeleteButton, EditButton, Create, Edit, SimpleForm, TextInput} from "react-admin";

// Danh sĂ¡ch cĂ¡c danh má»¥c
export const CategoryList = () => (
    <List>
        <Datagrid>
            <TextField source="categoryId" label="Category ID" />
            <TextField source="categoryName" label="Category Name" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

// Táº¡o má»›i danh má»¥c
export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="categoryName" label="Category Name" />
        </SimpleForm>
    </Create>   
);

// Chá»‰nh sá»­a danh má»¥c
export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="categoryId" label="Category ID" disabled />
            <TextInput source="categoryName" label="Category Name" />
        </SimpleForm>
    </Edit>
);
