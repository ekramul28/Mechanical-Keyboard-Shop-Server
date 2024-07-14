import Stripe from "stripe";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { createPaymentLinkService } from "./payment.service";

const stripePayment = catchAsync(async (req, res) => {
  const { products } = req.body;
  const result = await createPaymentLinkService.createPaymentLink(products);
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "link ",
    data: result,
  });
});

export const LinkControllers = {
  stripePayment,
};
