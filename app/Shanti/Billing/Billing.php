<?php

namespace App\Biling\Billing;

use Carbon\Carbon;
use Stripe\Charge;
use Stripe\Customer;
use Stripe\Error\ApiConnection;
use Stripe\Error\Authentication;
use Stripe\Error\Base;
use Stripe\Error\InvalidRequest;
use Stripe\Error\RateLimit;
use Stripe\Refund;
use Stripe\Stripe;
use Stripe\Error\Card;
use Stripe\Subscription;

class Billing {

    public function __construct() {
        Stripe::setApiKey(config('services.stripe.secret'));
    }

    public function createCustomer($description, $token) {
        return Customer::create([
            'description' => $description,
            'source' => $token
        ]);
    }

    public function subscribe($customer, $planId) {
        Subscription::create([
            'customer' => $customer->id,
            'items' =>  [
                [
                    'plan' => $planId
                ]
            ]
        ]);
    }

    public function charge($request, $shipping, $tax)
    {
        try {
            return Charge::create(array(
                'amount' => (int) round(($request->subtotal * 100) + $shipping + $tax, 2),
                'currency' => 'usd',
                'source' => $request->stripe_token,
                'description' => 'Purchase by ' . auth()->user()->first_name . ' ' . auth()->user()->last_name
            ));
        } catch (Card $e) {
            return $e->getMessage();
        } catch (RateLimit $e) {
            return $e->getMessage();
        } catch (InvalidRequest $e) {
            return $e->getMessage();
        } catch (Authentication $e) {
            return $e->getMessage();
        } catch (ApiConnection $e) {
            return $e->getMessage();
        } catch (Base $e) {
            return $e->getMessage();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function refund($stripeId, $amount = NULL)
    {
        try {
            return Refund::create([
                'charge' => $stripeId,
                'amount' => $amount
            ]);
        } catch (Card $e) {
            return $e->getMessage();
        } catch (RateLimit $e) {
            return $e->getMessage();
        } catch (InvalidRequest $e) {
            return $e->getMessage();
        } catch (Authentication $e) {
            return $e->getMessage();
        } catch (ApiConnection $e) {
            return $e->getMessage();
        } catch (Base $e) {
            return $e->getMessage();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}