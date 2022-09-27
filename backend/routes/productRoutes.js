const express = require("express")
const {createProduct, getProduct, deleteProduct, updateProduct} = require("../controllers/productControllers")

const router = express.Router()

router.route("/").post(createProduct)
router.route("/").get(getProduct)
router.route('/').put(updateProduct)
router.route("/:id").delete(deleteProduct)

module.exports = router