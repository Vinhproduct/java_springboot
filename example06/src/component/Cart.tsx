
import { List, useRecordContext, ReferenceField, TextField, Show, SimpleShowLayout, NumberField, ArrayField, ImageField, Datagrid } from 'react-admin';
import PDFButton from './PDFButton';
const CustomPDFButton = () => {
    const record = useRecordContext();

    if (!record) {
        return <span>Loading ...</span>;
    }

    if (!record.id) {
        return <span>No cart ID</span>;
    }

    return <PDFButton />;
};
export const CartList = () => {
    return (
        <List>
            <Datagrid rowClick="show">
                <TextField source="cartId" label="Cart ID" />
                <TextField source="totalPrice" label="Total Price" />
                <TextField source="userEmail" label="Email" />
            </Datagrid>
        </List>
    );
};
export const CartShow = () => (
    <Show>
        <SimpleShowLayout>
            <CustomPDFButton />
            <TextField source="cartId" label="Cart ID" />
            <NumberField source="totalPrice" label="Total Price" />
            <ArrayField source="products" label="Products">
                <Datagrid>
                    <TextField source="id" label="Product ID" />
                    <TextField source="productName" label="Product Name" />
                    <ImageField source="image" label="Image" />
                    <TextField source="description" label="Description" />
                    <NumberField source="quantity" label="Quantity" />
                    <NumberField source="price" label="Price" />
                    <NumberField source="discount" label="Discount" />
                    <NumberField source="specialPrice" label="Special Price" />
                    {/* <ReferenceField source="category.categoryId" reference="categories" label="Category">
                        <TextField source="categoryName" />
                    </ReferenceField> */}
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);