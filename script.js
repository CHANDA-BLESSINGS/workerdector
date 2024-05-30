document.getElementById('activateSignUpBtn').addEventListener('click', function() {
    alert('Sign Up Restrictions activated!');
});

document.getElementById('activateGeofencingBtn').addEventListener('click', function() {
    alert('Geofencing activated!');
});
document.addEventListener("DOMContentLoaded", function() {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', function() {
    // Handle logout logic here
    alert('Logged out');
  });

  const complaintForm = document.getElementById('complaintForm');
  complaintForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const complaintType = document.getElementById('complaintType').value;
    const complaintText = document.getElementById('complaintText').value;
    const fileUpload = document.getElementById('fileUpload').files[0];

    // Here you can perform validation and handle file upload
    
    // Example AJAX request to submit complaint
    // Replace this with your backend API endpoint
    // const formData = new FormData();
    // formData.append('complaintType', complaintType);
    // formData.append('complaintText', complaintText);
    // formData.append('fileUpload', fileUpload);
    // fetch('/submitComplaint',

document.getElementById('activateHoursCountBtn').addEventListener('click', function() {
    alert('Hours Worked Counting activated!');
});

document.getElementById('activateEmailDetectionBtn').addEventListener('click', function() {
    alert('Email Address Detection activated!');
});

document.getElementById('activateLocationDetectionBtn').addEventListener('click', function() {
    alert('Location Detection activated!');
});document.getElementById('activatePasswordBtn').addEventListener('click', function() {
    alert('Password Generation activated!');
});

document.getElementById('activateSignUpBtn').addEventListener('click', function() {
    alert('Sign Up activated!');
});

document.getElementById('activateResetPasswordBtn').addEventListener('click', function() {
    alert('Reset Password activated!');
});

document.getElementById('activateComplaintBtn').addEventListener('click', function() {
    alert('Complaint Submission activated!');
});

document.getElementById('activateMessagingBtn').addEventListener('click', function() {
    alert('Messaging activated!');
});

document.getElementById('activateAudioCallBtn').addEventListener('click', function() {
    alert('Audio Calling activated!');
});

document.getElementById('activateVideoCallBtn').addEventListener('click', function() {
    alert('Video Calling activated!');
});

// script.js

document.getElementById('start-installation').addEventListener('click', function() {
    // Code to start the installation process
});document.getElementById('activateBiometricBtn').addEventListener('click', function() {
    alert('Biometric Detection activated!');
});

document.getElementById('activateLanguageSelectionBtn').addEventListener('click', function() {
    alert('Language Selection System activated!');
});

document.getElementById('activateDatabaseBtn').addEventListener('click', function() {
    alert('Database activated!');
});

document.getElementById('activateAnimationBtn').addEventListener('click', function() {
    alert('Background Animation activated!');
});


document.getElementById('start-work').addEventListener('click', function() {
    // Code to start work after setup and installation
document.getElementById('activateDashboardBtn').addEventListener('click', function() {
    alert('Dashboard Setup for Managers activated!');
});

document.getElementById('activateProfileCreationBtn').addEventListener('click', function() {
    alert('Worker Profile Creation activated!');
});

document.getElementById('activateLocationHistoryBtn').addEventListener('click', function() {
    alert('Location History Configuration activated!');
});

document.getElementById('activateAnalyticsBtn').addEventListener('click', function() {
    alert('Analytics and Reporting Setup activated!');
});
 script.js

document.getElementById('start-working').addEventListener('click', function() {
    // Code to start working after setup
});document.addEventListener("DOMContentLoaded", function() {
    // Check if geolocation is available
    if ("geolocation" in navigator) {
        console.log("Geolocation is available");
    } else {
        console.log("Geolocation is not available");
    }

    // Wi-Fi Based Locationing Setup
    // This requires additional setup and is not included in this example

    // Beacon Technology Integration
    // This requires additional setup and is not included in this example

    // GPS Tracking Calibration
    // This requires additional setup and is not included in this example

    // Geofencing
    // This requires additional setup and is not included in this example

    const startButton = document.getElementById("startButton");
    const locationInfo = document.getElementById("locationInfo");

    startButton.addEventListener("click", function() {
        // Start location detection
        getLocation();
    });

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            locationInfo.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        locationInfo.innerHTML = `
            Latitude: ${position.coords.latitude}<br>
            Longitude: ${position.coords.longitude}
        `;
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                locationInfo.innerHTML = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                locationInfo.innerHTML = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                locationInfo.innerHTML = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                locationInfo.innerHTML = "An unknown error occurred.";
                break;
        }
    }
});document.addEventListener("DOMContentLoaded", function() {
    const emailButton = document.getElementById("emailButton");
    const smsButton = document.getElementById("smsButton");
    const inAppButton = document.getElementById("inAppButton");
    const pushButton = document.getElementById("pushdocument.getElementById('userRoleSetupBtn').addEventListener('click', function() {
    // Code to activate user role setup
    alert('User Role Setup Activated');
});

document.getElementById('accessControlBtn').addEventListener('click', function() {
    // Code to activate access control configuration
    alert('Access Control Configuration Activated');
});

document.getElementById('passwordManagementBtn').addEventListener('click', function() {
    // Code to activate password management
    alert('Password Management Activated');
});

document.getElementById('twoFactorAuthenticationBtn').addEventListener('click', function() {
    // Code to activate two-factor authentication setup
    alert('Two-Factor Authentication Setup Activated');
});document.getElementById('analyticsBtn').addEventListener('click', function() {
    alert('Analytics activated!');
});

document.getElementById('reportingBtn').addEventListener('click', function() {
    alert('Reporting activated!');
});document.getElementById('activateBtn').addEventListener('click', function() {
    alert('Instructional module activated!');
});document.getElementById('activateBtn').addEventListener('click', function() {
    alert('Instructional module activated!');
});document.getElementById('openArchitectureBtn').addEventListener('click', function() {
    alert('Scalable architecture setup opened!');
});

document.getElementById('openUpdatesBtn').addEventListener('click', function() {
    alert('Automatic updates opened!');
});

document.getElementById('openSupportBtn').addEventListener('click', function() {
    alert('Technical support configuration opened!');
});

document.getElementById('openMaintenanceBtn').addEventListener('click', function() {
    alert('Maintenance scheduling opened!');
});document.getElementById('openHRIntegrationBtn').addEventListener('click', function() {
    alert('HR Software Integration opened!');
});

document.getElementById('openTimeTrackingIntegrationBtn').addEventListener('click', function() {
    alert('Time-Tracking System Integration opened!');
});

document.getElementById('openAccessControlIntegrationBtn').addEventListener('click', function() {
    alert('Access Control System Integration opened!');
});

document.getElementById('openAPIIntegrationBtn').addEventListener('click', function() {
    alert('API Integration Configuration opened!');
});document.getElementById('activateEncryptionBtn').addEventListener('click', function() {
    alert('Data Encryption activated!');
});

document.getElementById('activateAccessControlBtn').addEventListener('click', function() {
    alert('Access Control activated!');
});

document.getElementById('activateAnonymizationBtn').addEventListener('click', function() {
    alert('Data Anonymization activated!');
});

document.getElementById('activateGDPRBtn').addEventListener('click', function() {
    alert('GDPR Compliance activated!');
});<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security and Privacy</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="security-privacy">
        <h1>Security and Privacy</h1>
        <button id="activateManagerAccessBtn">Activate Manager Access</button>
        <div id="managerAccess">
            <h2>Manager Access to Worker's Dashboard</h2>
            <!-- Manager access setup options can be added here -->
        </div>
        <button id="activateCommunicationBtn">Activate Dashboard Communication</button>
        <div id="dashboardCommunication">
            <h2>Dashboard Communication (Managers and Workers)</h2>
            <!-- Dashboard communication options can be added here -->
        </div>
        <button id="activateUploadBtn">Activate Personal Information Upload</button>
        <div id="personalInfoUpload">
            <h2>Personal Information Upload by Workers</h2>
            <!-- Personal information upload options can be added here -->
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>document.getElementById('activateManagerAccessBtn').addEventListener('click', function() {
    alert('Manager Access activated!');
});

document.getElementById('activateCommunicationBtn').addEventListener('click', function() {
    alert('Dashboard Communication activated!');
});

document.getElementById('activateUploadBtn').addEventListener('click', function() {
    alert('Personal Information Upload activated!');
});document.getElementById('openQuickStartBtn').addEventListener('click', function() {
    alert('Quick Start opened!');
});

document.getElementById('openUserManualBtn').addEventListener('click', function() {
    alert('User Manual opened!');
});

document.getElementById('openTutorialVideoBtn').addEventListener('click', function() {
    alert('Tutorial Video opened!');
});

document.getElementById('openSupportContactBtn').addEventListener('click', function() {
    alert('Support Contact Information opened!');
});document.addEventListener("DOMContentLoaded", function() {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', function() {
    // Handle logout logic here
    alert('Logged out');
  });

  const checkLocationBtn = document.getElementById('checkLocationBtn');
  const currentLocationSpan = document.getElementById('currentLocation');

  checkLocationBtn.addEventListener('click', function() {
    // Simulate getting current location (replace with real geolocation logic)
    const latitude = 37.7749;
    const longitude = -122.4194;

    // Simulate workplace coordinates (replace with your workplace coordinates)
    const workplaceLatitude = 37.7749;
    const workplaceLongitude = -122.4194;

    // Simulate geofencing logic
    const withinWorkplace = isWithinRadius(latitude, longitude, workplaceLatitude, workplaceLongitude, 500); // 500 meters radius

    if (withinWorkplace) {
      currentLocationSpan.textContent = 'Inside Workplace';
    } else {
      currentLocationSpan.textContent = 'Outside Workplace';
    }
  });

  // Function to check if a location is within a certain radius of another location
  function isWithinRadius(lat1, lon1, lat2, lon2, radius) {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2-lat1) * Math.PI / 180;
    const Δλ = (lon2-lon1) * Math.PI / 180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c;

    return d <= radius;
  }
});document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('save_personal_info.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert('Personal information saved successfully!');
        // Optionally, redirect to another page
        // window.location.href = 'thank_you.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while saving personal information. Please try again later.');
    });
});
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('authenticate.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (data.success) {
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while signing in. Please try again later.');
    });
});















