import React, { useState } from "react";
import {
  Heart,
  Smartphone,
  CreditCard,
  Shield,
  TreePine,
  Fish,
  Bird,
  Globe,
  Check,
  ArrowRight,
  Lock,
  Phone,
  Mail,
  User,
  MapPin,
  House,
  X,
} from "lucide-react";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mpesaNumber: "",
    // Credit card fields
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
  });

  const presetAmounts = [
    { amount: 500, impact: "Protects 1 tree for a year" },
    { amount: 1000, impact: "Feeds rescued wildlife for a week" },
    { amount: 2500, impact: "Plants 5 trees in deforested areas" },
    { amount: 5000, impact: "Supports marine conservation for a month" },
    { amount: 10000, impact: "Funds anti-poaching patrol for a week" },
    { amount: 25000, impact: "Protects 1 hectare of forest" },
  ];

  const impactIcons = {
    500: TreePine,
    1000: Bird,
    2500: TreePine,
    5000: Fish,
    10000: Shield,
    25000: Globe,
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value) || 0);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatPhoneNumber = (phone) => {
    // Format Kenyan phone numbers
    let cleaned = phone.replace(/\D/g, "");
    if (cleaned.startsWith("0")) {
      cleaned = "254" + cleaned.slice(1);
    }
    return cleaned;
  };

  const handleSubmit = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(
        `Thank you for your donation of KES ${selectedAmount.toLocaleString()}! Your contribution will make a real difference.`
      );
    }, 3000);
  };

  const formatCurrency = (amount) => {
    return `KES ${amount.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/*Nav*/}
      <div className="fixed top-4 right-4 w-fit text-sm z-50 bg-emerald-100 border-emerald-600 border-2 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg p-1">
        <Link to="/" className="text-emerald-600 ">
          <X size={15} />
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Make a <span className="text-emerald-600">Difference</span> Today
            </h1>
            <p className="text-gray-600">
              Your donation directly supports wildlife conservation and
              community empowerment
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Step 1: Choose Amount */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-red-500 mr-2" />
                  Choose Your Impact
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {presetAmounts.map((preset) => {
                    const IconComponent = impactIcons[preset.amount];
                    return (
                      <button
                        key={preset.amount}
                        type="button"
                        onClick={() => handleAmountSelect(preset.amount)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          selectedAmount === preset.amount && !customAmount
                            ? "border-emerald-500 bg-emerald-50 shadow-lg"
                            : "border-gray-200 hover:border-emerald-300 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold">
                            {formatCurrency(preset.amount)}
                          </span>
                          <IconComponent className="h-5 w-5 text-emerald-600" />
                        </div>
                        <p className="text-sm text-gray-600">{preset.impact}</p>
                      </button>
                    );
                  })}
                </div>

                <div className="relative">
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-300"
                    min="100"
                  />
                  <span className="absolute left-4 top-4 text-gray-500 pointer-events-none"></span>
                </div>
              </div>

              {/* Step 2: Payment Method */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Choose Payment Method
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mpesa")}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === "mpesa"
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Smartphone className="h-8 w-8 text-green-600 mr-3" />
                      <span className="text-xl font-bold text-green-700">
                        M-Pesa
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      Pay with your mobile money
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === "card"
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
                      <span className="text-xl font-bold text-blue-700">
                        Credit Card
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      Visa, Mastercard accepted
                    </p>
                  </button>
                </div>
              </div>

              {/* Step 3: Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="relative mb-4">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (0712345678)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Payment Details */}
              {paymentMethod === "mpesa" && (
                <div className="mb-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    M-Pesa Payment
                  </h3>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="mpesaNumber"
                      placeholder="M-Pesa Number (0712345678)"
                      value={formData.mpesaNumber}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <p className="text-sm text-green-700 mt-3">
                    You'll receive an M-Pesa prompt on your phone to complete
                    the payment.
                  </p>
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="mb-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Credit Card Details
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number (1234 5678 9012 3456)"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                        required
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="billingAddress"
                        placeholder="Billing Address"
                        value={formData.billingAddress}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isProcessing || selectedAmount < 100}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                  isProcessing || selectedAmount < 100
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:from-emerald-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5 mr-2" />
                    Donate {formatCurrency(selectedAmount)}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-1" />
                Your payment is secure and encrypted
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Your Impact
              </h3>
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-xl mb-4">
                <div className="text-2xl font-bold">
                  {formatCurrency(selectedAmount)}
                </div>
                <div className="text-sm opacity-90">
                  will help us continue our mission
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span>100% goes to conservation</span>
                </div>
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span>Tax-deductible donation</span>
                </div>
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span>Monthly impact reports</span>
                </div>
              </div>
            </div>

            {/* Recent Impact */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Recent Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <TreePine className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <div className="font-semibold">2,847 Trees</div>
                    <div className="text-sm text-gray-600">
                      Planted this month
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bird className="h-8 w-8 text-blue-500 mr-3" />
                  <div>
                    <div className="font-semibold">156 Animals</div>
                    <div className="text-sm text-gray-600">
                      Rescued & protected
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-8 w-8 text-purple-500 mr-3" />
                  <div>
                    <div className="font-semibold">12 Communities</div>
                    <div className="text-sm text-gray-600">
                      Empowered this week
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Contact our donation support team
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>donate@conservation.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
