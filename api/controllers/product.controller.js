import Product from '../models/Product.js';

export const createProduct = async (req, res, next) => {
    try {
        if (!req.user) {
            return next(CreateError(401, "You are not authenticated!"));
        }

        const { name, description, price, imageUrl } = req.body;
        const userId = req.user.id;

        const product = new Product({
            name,
            description,
            price,
            imageUrl,
            createdBy: userId
        });

        const result = await product.save();

        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: {
                ...product.toObject(),
                _id: result._id.toHexString()
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create product!",
            error: error.message
        });
    }
};

export const getAllProducts = async (req, res) => {
    try {
      const response = await Product.find();
      res.status(200).json({
        success: true,
        message: "All products fetched successfully!",
        data: response
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch products!",
        error: error.message
      });
    }
  };

export const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteProductById = async (req, res) => {
    try {
      const deletedProduct = await Product.findOneAndDelete({
        _id: req.params.id
      });
      
      if (!deletedProduct) {
        return res.status(404).json({
          success: false,
          message: "Product not found!"
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: deletedProduct
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete product!",
        error: error.message
      });
    }
  };