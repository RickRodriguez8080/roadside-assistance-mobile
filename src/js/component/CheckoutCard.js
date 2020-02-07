import React from "react";
import { Link } from "react-router-dom";


export const CheckoutCard = () => {
	return (
        <div class="card text-center">
            <div class="card-header">
                    Featured
            </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Request Service</a>
                    <a href="#" class="btn btn-primary">Back</a>
                </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>
    	);
};

