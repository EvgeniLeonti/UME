$(document).ready(function(){
    // $("body").height($("body").height() - $("#top_menu").height());
    $("#dialog-message").dialog({
        autoOpen: false,
        modal: true,
        width: 500,
        height: 650,

        buttons: {
            Ok: function() {
                $( this ).dialog( "close" );
            }
        }
    });
});

function showDetails(id) {
    $("#dialog-message").dialog("open");

    var audioData = [
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 9,
            "time": 1530213184
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 7,
            "time": 1530213187
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 8,
            "time": 1530213190
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 15,
            "time": 1530213193
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 6,
            "time": 1530213196
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 15,
            "time": 1530213199
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 2,
            "time": 1530213202
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 9,
            "time": 1530213205
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 7,
            "time": 1530213208
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 12,
            "time": 1530213211
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 12,
            "time": 1530213214
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 8,
            "time": 1530213217
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 14,
            "time": 1530213220
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 9,
            "time": 1530213223
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 14,
            "time": 1530213226
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 6,
            "time": 1530213229
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 15,
            "time": 1530213232
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 10,
            "time": 1530213235
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 9,
            "time": 1530213238
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 15,
            "time": 1530213241
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 11,
            "time": 1530213244
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 5,
            "time": 1530213247
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 7,
            "time": 1530213250
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 12,
            "time": 1530213253
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 15,
            "time": 1530213256
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 10,
            "time": 1530213259
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 2,
            "time": 1530213262
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 3,
            "time": 1530213265
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 14,
            "time": 1530213268
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 15,
            "time": 1530213271
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 7,
            "time": 1530213274
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 15,
            "time": 1530213277
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 3,
            "time": 1530213280
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 13,
            "time": 1530213283
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 4,
            "time": 1530213286
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 13,
            "time": 1530213289
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 11,
            "time": 1530213292
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 15,
            "time": 1530213295
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 4,
            "time": 1530213298
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 2,
            "time": 1530213301
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 11,
            "time": 1530213304
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 11,
            "time": 1530213307
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 15,
            "time": 1530213310
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 14,
            "time": 1530213313
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 8,
            "time": 1530213316
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 11,
            "time": 1530213319
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 9,
            "time": 1530213322
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 2,
            "time": 1530213325
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 15,
            "time": 1530213328
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 3,
            "time": 1530213331
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 10,
            "time": 1530213334
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 4,
            "time": 1530213337
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 4,
            "time": 1530213340
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 5,
            "time": 1530213343
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 2,
            "time": 1530213346
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 15,
            "time": 1530213349
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 4,
            "time": 1530213352
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 4,
            "time": 1530213355
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 3,
            "time": 1530213358
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 6,
            "time": 1530213361
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 5,
            "time": 1530213364
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 14,
            "time": 1530213367
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 5,
            "time": 1530213370
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 15,
            "time": 1530213373
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 5,
            "time": 1530213376
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 9,
            "time": 1530213379
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 15,
            "time": 1530213382
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 2,
            "time": 1530213385
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 13,
            "time": 1530213388
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 2,
            "time": 1530213391
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 9,
            "time": 1530213394
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 7,
            "time": 1530213397
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 8,
            "time": 1530213400
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 15,
            "time": 1530213403
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 7,
            "time": 1530213406
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 5,
            "time": 1530213409
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 8,
            "time": 1530213412
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 11,
            "time": 1530213415
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 13,
            "time": 1530213418
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 11,
            "time": 1530213421
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 9,
            "time": 1530213424
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 5,
            "time": 1530213427
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 11,
            "time": 1530213430
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 14,
            "time": 1530213433
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 11,
            "time": 1530213436
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 4,
            "time": 1530213439
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 5,
            "time": 1530213442
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 11,
            "time": 1530213445
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 11,
            "time": 1530213448
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 2,
            "time": 1530213451
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 6,
            "time": 1530213454
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 8,
            "time": 1530213457
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 4,
            "time": 1530213460
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 9,
            "time": 1530213463
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 15,
            "time": 1530213466
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 10,
            "time": 1530213469
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 4,
            "time": 1530213472
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 5,
            "time": 1530213475
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 6,
            "time": 1530213478
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 9,
            "time": 1530213481
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 8,
            "time": 1530213484
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 15,
            "time": 1530213487
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 6,
            "time": 1530213490
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 14,
            "time": 1530213493
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 3,
            "time": 1530213496
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 14,
            "time": 1530213499
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 5,
            "time": 1530213502
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 9,
            "time": 1530213505
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 3,
            "time": 1530213508
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 14,
            "time": 1530213511
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 15,
            "time": 1530213514
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 4,
            "time": 1530213517
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 9,
            "time": 1530213520
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 7,
            "time": 1530213523
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 10,
            "time": 1530213526
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 2,
            "time": 1530213529
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 15,
            "time": 1530213532
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 10,
            "time": 1530213535
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 15,
            "time": 1530213538
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 8,
            "time": 1530213541
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 6,
            "time": 1530213544
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 6,
            "time": 1530213547
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 10,
            "time": 1530213550
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 4,
            "time": 1530213553
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 11,
            "time": 1530213556
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 12,
            "time": 1530213559
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 7,
            "time": 1530213562
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 8,
            "time": 1530213565
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 3,
            "time": 1530213568
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 9,
            "time": 1530213571
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 13,
            "time": 1530213574
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 10,
            "time": 1530213577
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 15,
            "time": 1530213580
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 12,
            "time": 1530213583
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 15,
            "time": 1530213586
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 3,
            "time": 1530213589
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 2,
            "time": 1530213592
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 14,
            "time": 1530213595
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 15,
            "time": 1530213598
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 15,
            "time": 1530213601
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 12,
            "time": 1530213604
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 4,
            "time": 1530213607
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 3,
            "time": 1530213610
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 6,
            "time": 1530213613
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 6,
            "time": 1530213616
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 12,
            "time": 1530213619
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 15,
            "time": 1530213622
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 3,
            "time": 1530213625
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 12,
            "time": 1530213628
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 3,
            "time": 1530213631
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 6,
            "time": 1530213634
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 5,
            "time": 1530213637
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 15,
            "time": 1530213640
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 9,
            "time": 1530213643
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 7,
            "time": 1530213646
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 10,
            "time": 1530213649
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 14,
            "time": 1530213652
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 14,
            "time": 1530213655
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 2,
            "time": 1530213658
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 7,
            "time": 1530213661
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 14,
            "time": 1530213664
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 5,
            "time": 1530213667
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 6,
            "time": 1530213670
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 5,
            "time": 1530213673
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 11,
            "time": 1530213676
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 4,
            "time": 1530213679
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 11,
            "time": 1530213682
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 8,
            "time": 1530213685
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 7,
            "time": 1530213688
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 4,
            "time": 1530213691
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 13,
            "time": 1530213694
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 13,
            "time": 1530213697
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 14,
            "time": 1530213700
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 7,
            "time": 1530213703
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 15,
            "time": 1530213706
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 11,
            "time": 1530213709
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 9,
            "time": 1530213712
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 12,
            "time": 1530213715
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 11,
            "time": 1530213718
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 2,
            "time": 1530213721
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 10,
            "time": 1530213724
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 8,
            "time": 1530213727
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 15,
            "time": 1530213730
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 2,
            "time": 1530213733
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 5,
            "time": 1530213736
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 8,
            "time": 1530213739
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 9,
            "time": 1530213742
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 5,
            "time": 1530213745
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 3,
            "time": 1530213748
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 7,
            "time": 1530213751
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 2,
            "time": 1530213754
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 7,
            "time": 1530213757
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 5,
            "time": 1530213760
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 9,
            "time": 1530213763
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 4,
            "time": 1530213766
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 15,
            "time": 1530213769
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 15,
            "time": 1530213772
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 13,
            "time": 1530213775
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 5,
            "time": 1530213778
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 9,
            "time": 1530213781
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 7,
            "time": 1530213784
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 13,
            "time": 1530213787
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 12,
            "time": 1530213790
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 14,
            "time": 1530213793
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 11,
            "time": 1530213796
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 2,
            "time": 1530213799
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 4,
            "time": 1530213802
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 7,
            "time": 1530213805
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 3,
            "time": 1530213808
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 14,
            "time": 1530213811
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 6,
            "time": 1530213814
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 10,
            "time": 1530213817
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 14,
            "time": 1530213820
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 13,
            "time": 1530213823
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 9,
            "time": 1530213826
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 10,
            "time": 1530213829
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 11,
            "time": 1530213832
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 7,
            "time": 1530213835
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 4,
            "time": 1530213838
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 14,
            "time": 1530213841
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 13,
            "time": 1530213844
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 4,
            "time": 1530213847
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 2,
            "time": 1530213850
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 4,
            "time": 1530213853
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 3,
            "time": 1530213856
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 6,
            "time": 1530213859
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 7,
            "time": 1530213862
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 11,
            "time": 1530213865
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 14,
            "time": 1530213868
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 9,
            "time": 1530213871
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 7,
            "time": 1530213874
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 13,
            "time": 1530213877
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 14,
            "time": 1530213880
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 7,
            "time": 1530213883
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 3,
            "time": 1530213886
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 12,
            "time": 1530213889
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 15,
            "time": 1530213892
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 14,
            "time": 1530213895
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 14,
            "time": 1530213898
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 6,
            "time": 1530213901
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 8,
            "time": 1530213904
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 12,
            "time": 1530213907
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 4,
            "time": 1530213910
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 11,
            "time": 1530213913
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 13,
            "time": 1530213916
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 14,
            "time": 1530213919
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 5,
            "time": 1530213922
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 7,
            "time": 1530213925
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 9,
            "time": 1530213928
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 10,
            "time": 1530213931
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 2,
            "time": 1530213934
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 6,
            "time": 1530213937
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 3,
            "time": 1530213940
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 8,
            "time": 1530213943
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 13,
            "time": 1530213946
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 11,
            "time": 1530213949
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 9,
            "time": 1530213952
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 7,
            "time": 1530213955
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 13,
            "time": 1530213958
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 5,
            "time": 1530213961
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 10,
            "time": 1530213964
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 15,
            "time": 1530213967
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 13,
            "time": 1530213970
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 12,
            "time": 1530213973
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 7,
            "time": 1530213976
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 3,
            "time": 1530213979
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 13,
            "time": 1530213982
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 12,
            "time": 1530213985
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 10,
            "time": 1530213988
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 9,
            "time": 1530213991
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 5,
            "time": 1530213994
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 12,
            "time": 1530213997
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 14,
            "time": 1530214000
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 3,
            "time": 1530214003
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 5,
            "time": 1530214006
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 6,
            "time": 1530214009
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 14,
            "time": 1530214012
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 9,
            "time": 1530214015
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 15,
            "time": 1530214018
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 7,
            "time": 1530214021
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 7,
            "time": 1530214024
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 2,
            "time": 1530214027
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 6,
            "time": 1530214030
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 4,
            "time": 1530214033
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 6,
            "time": 1530214036
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 6,
            "time": 1530214039
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 8,
            "time": 1530214042
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 15,
            "time": 1530214045
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 8,
            "time": 1530214048
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 2,
            "time": 1530214051
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 4,
            "time": 1530214054
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 4,
            "time": 1530214057
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 12,
            "time": 1530214060
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 6,
            "time": 1530214063
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 2,
            "time": 1530214066
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 12,
            "time": 1530214069
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 9,
            "time": 1530214072
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 10,
            "time": 1530214075
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 11,
            "time": 1530214078
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 13,
            "time": 1530214081
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 8,
            "time": 1530214084
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 2,
            "time": 1530214087
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 6,
            "time": 1530214090
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 11,
            "time": 1530214093
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 2,
            "time": 1530214096
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 6,
            "time": 1530214099
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 8,
            "time": 1530214102
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 4,
            "time": 1530214105
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 8,
            "time": 1530214108
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 7,
            "time": 1530214111
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 7,
            "time": 1530214114
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 15,
            "time": 1530214117
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 6,
            "time": 1530214120
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 12,
            "time": 1530214123
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 7,
            "time": 1530214126
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 9,
            "time": 1530214129
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 10,
            "time": 1530214132
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 2,
            "time": 1530214135
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 4,
            "time": 1530214138
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 3,
            "time": 1530214141
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 14,
            "time": 1530214144
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 12,
            "time": 1530214147
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 8,
            "time": 1530214150
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 6,
            "time": 1530214153
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 6,
            "time": 1530214156
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 12,
            "time": 1530214159
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 10,
            "time": 1530214162
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 5,
            "time": 1530214165
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 13,
            "time": 1530214168
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 5,
            "time": 1530214171
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 11,
            "time": 1530214174
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 15,
            "time": 1530214177
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 6,
            "time": 1530214180
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 8,
            "time": 1530214183
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 5,
            "time": 1530214186
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 6,
            "time": 1530214189
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 7,
            "time": 1530214192
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 15,
            "time": 1530214195
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 7,
            "time": 1530214198
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 12,
            "time": 1530214201
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 9,
            "time": 1530214204
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 14,
            "time": 1530214207
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 2,
            "time": 1530214210
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 12,
            "time": 1530214213
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 2,
            "time": 1530214216
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 4,
            "time": 1530214219
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 9,
            "time": 1530214222
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 10,
            "time": 1530214225
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 12,
            "time": 1530214228
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 6,
            "time": 1530214231
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 2,
            "time": 1530214234
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 4,
            "time": 1530214237
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 15,
            "time": 1530214240
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 4,
            "time": 1530214243
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 8,
            "time": 1530214246
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 10,
            "time": 1530214249
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 15,
            "time": 1530214252
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 14,
            "time": 1530214255
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 7,
            "time": 1530214258
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 11,
            "time": 1530214261
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 5,
            "time": 1530214264
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 13,
            "time": 1530214267
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 9,
            "time": 1530214270
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 8,
            "time": 1530214273
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 10,
            "time": 1530214276
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 4,
            "time": 1530214279
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 13,
            "time": 1530214282
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 14,
            "time": 1530214285
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 3,
            "time": 1530214288
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 14,
            "time": 1530214291
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 6,
            "time": 1530214294
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 8,
            "time": 1530214297
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 8,
            "time": 1530214300
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 2,
            "time": 1530214303
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 15,
            "time": 1530214306
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 4,
            "time": 1530214309
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 15,
            "time": 1530214312
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 3,
            "time": 1530214315
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 15,
            "time": 1530214318
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 9,
            "time": 1530214321
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 9,
            "time": 1530214324
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 4,
            "time": 1530214327
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 5,
            "time": 1530214330
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 8,
            "time": 1530214333
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 13,
            "time": 1530214336
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 3,
            "time": 1530214339
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 4,
            "time": 1530214342
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 12,
            "time": 1530214345
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 4,
            "time": 1530214348
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 13,
            "time": 1530214351
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 3,
            "time": 1530214354
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 4,
            "time": 1530214357
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 12,
            "time": 1530214360
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 7,
            "time": 1530214363
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 2,
            "time": 1530214366
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 10,
            "time": 1530214369
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 10,
            "time": 1530214372
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 2,
            "time": 1530214375
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 14,
            "time": 1530214378
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 11,
            "time": 1530214381
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 12,
            "time": 1530214384
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 4,
            "time": 1530214387
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 9,
            "time": 1530214390
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 14,
            "time": 1530214393
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 13,
            "time": 1530214396
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 4,
            "time": 1530214399
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 11,
            "time": 1530214402
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 12,
            "time": 1530214405
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 3,
            "time": 1530214408
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 6,
            "time": 1530214411
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 13,
            "time": 1530214414
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 8,
            "time": 1530214417
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 8,
            "time": 1530214420
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 5,
            "time": 1530214423
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 6,
            "time": 1530214426
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 10,
            "time": 1530214429
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 8,
            "time": 1530214432
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 15,
            "time": 1530214435
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 10,
            "time": 1530214438
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 10,
            "time": 1530214441
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 8,
            "time": 1530214444
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 3,
            "time": 1530214447
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 2,
            "time": 1530214450
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 13,
            "time": 1530214453
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 15,
            "time": 1530214456
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 10,
            "time": 1530214459
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 5,
            "time": 1530214462
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 3,
            "time": 1530214465
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 15,
            "time": 1530214468
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 7,
            "time": 1530214471
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 7,
            "time": 1530214474
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 6,
            "time": 1530214477
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 13,
            "time": 1530214480
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 8,
            "time": 1530214483
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 2,
            "time": 1530214486
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 4,
            "time": 1530214489
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 6,
            "time": 1530214492
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 9,
            "time": 1530214495
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 12,
            "time": 1530214498
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 6,
            "time": 1530214501
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 4,
            "time": 1530214504
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 4,
            "time": 1530214507
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 11,
            "time": 1530214510
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 12,
            "time": 1530214513
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 3,
            "time": 1530214516
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 15,
            "time": 1530214519
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 11,
            "time": 1530214522
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 13,
            "time": 1530214525
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 14,
            "time": 1530214528
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 4,
            "time": 1530214531
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 15,
            "time": 1530214534
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 4,
            "time": 1530214537
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 14,
            "time": 1530214540
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 14,
            "time": 1530214543
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 5,
            "time": 1530214546
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 12,
            "time": 1530214549
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 5,
            "time": 1530214552
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 9,
            "time": 1530214555
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 12,
            "time": 1530214558
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 10,
            "time": 1530214561
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 3,
            "time": 1530214564
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 13,
            "time": 1530214567
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 14,
            "time": 1530214570
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 3,
            "time": 1530214573
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 11,
            "time": 1530214576
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 10,
            "time": 1530214579
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 12,
            "time": 1530214582
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 3,
            "time": 1530214585
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 11,
            "time": 1530214588
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 7,
            "time": 1530214591
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 5,
            "time": 1530214594
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 9,
            "time": 1530214597
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 9,
            "time": 1530214600
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 13,
            "time": 1530214603
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 4,
            "time": 1530214606
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 2,
            "time": 1530214609
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 15,
            "time": 1530214612
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 2,
            "time": 1530214615
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 2,
            "time": 1530214618
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 12,
            "time": 1530214621
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 3,
            "time": 1530214624
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 11,
            "time": 1530214627
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 5,
            "time": 1530214630
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 2,
            "time": 1530214633
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 10,
            "time": 1530214636
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 8,
            "time": 1530214639
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 15,
            "time": 1530214642
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 5,
            "time": 1530214645
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 14,
            "time": 1530214648
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 5,
            "time": 1530214651
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 2,
            "time": 1530214654
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 8,
            "time": 1530214657
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 9,
            "time": 1530214660
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 9,
            "time": 1530214663
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 7,
            "time": 1530214666
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 3,
            "time": 1530214669
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 15,
            "time": 1530214672
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 10,
            "time": 1530214675
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 12,
            "time": 1530214678
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 14,
            "time": 1530214681
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 12,
            "time": 1530214684
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 2,
            "time": 1530214687
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 14,
            "time": 1530214690
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 3,
            "time": 1530214693
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 3,
            "time": 1530214696
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 10,
            "time": 1530214699
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 15,
            "time": 1530214702
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 9,
            "time": 1530214705
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 13,
            "time": 1530214708
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 11,
            "time": 1530214711
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 10,
            "time": 1530214714
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 11,
            "time": 1530214717
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 11,
            "time": 1530214720
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 4,
            "time": 1530214723
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 10,
            "time": 1530214726
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 12,
            "time": 1530214729
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 3,
            "time": 1530214732
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 68,
            "freq": 13,
            "time": 1530214735
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 9,
            "time": 1530214738
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 13,
            "time": 1530214741
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 8,
            "time": 1530214744
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 7,
            "time": 1530214747
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 11,
            "time": 1530214750
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 9,
            "time": 1530214753
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 10,
            "time": 1530214756
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 13,
            "time": 1530214759
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 13,
            "time": 1530214762
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 2,
            "time": 1530214765
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 15,
            "time": 1530214768
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 15,
            "time": 1530214771
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 7,
            "time": 1530214774
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 3,
            "time": 1530214777
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 6,
            "time": 1530214780
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 10,
            "time": 1530214783
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 10,
            "time": 1530214786
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 14,
            "time": 1530214789
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 8,
            "time": 1530214792
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 8,
            "time": 1530214795
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 14,
            "time": 1530214798
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 5,
            "time": 1530214801
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 14,
            "time": 1530214804
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 10,
            "time": 1530214807
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 11,
            "time": 1530214810
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 15,
            "time": 1530214813
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 14,
            "time": 1530214816
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 7,
            "time": 1530214819
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 8,
            "time": 1530214822
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 15,
            "time": 1530214825
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 9,
            "time": 1530214828
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 13,
            "time": 1530214831
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 7,
            "time": 1530214834
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 4,
            "time": 1530214837
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 10,
            "time": 1530214840
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 4,
            "time": 1530214843
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 3,
            "time": 1530214846
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 15,
            "time": 1530214849
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 15,
            "time": 1530214852
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 14,
            "time": 1530214855
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 8,
            "time": 1530214858
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 11,
            "time": 1530214861
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 14,
            "time": 1530214864
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 2,
            "time": 1530214867
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 9,
            "time": 1530214870
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 55,
            "freq": 10,
            "time": 1530214873
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 9,
            "time": 1530214876
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 13,
            "time": 1530214879
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 12,
            "time": 1530214882
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 8,
            "time": 1530214885
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 52,
            "freq": 2,
            "time": 1530214888
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 8,
            "time": 1530214891
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 11,
            "time": 1530214894
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 11,
            "time": 1530214897
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 9,
            "time": 1530214900
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 15,
            "time": 1530214903
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 6,
            "time": 1530214906
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 4,
            "time": 1530214909
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 12,
            "time": 1530214912
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 5,
            "time": 1530214915
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 4,
            "time": 1530214918
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 10,
            "time": 1530214921
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 3,
            "time": 1530214924
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 7,
            "time": 1530214927
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 6,
            "time": 1530214930
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 9,
            "time": 1530214933
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 11,
            "time": 1530214936
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 4,
            "time": 1530214939
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 13,
            "time": 1530214942
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 9,
            "time": 1530214945
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 14,
            "time": 1530214948
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 4,
            "time": 1530214951
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 4,
            "time": 1530214954
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 10,
            "time": 1530214957
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 7,
            "time": 1530214960
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 10,
            "time": 1530214963
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 15,
            "time": 1530214966
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 13,
            "time": 1530214969
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 12,
            "time": 1530214972
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 6,
            "time": 1530214975
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 11,
            "time": 1530214978
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 8,
            "time": 1530214981
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 79,
            "freq": 12,
            "time": 1530214984
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 10,
            "time": 1530214987
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 2,
            "time": 1530214990
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 5,
            "time": 1530214993
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 14,
            "time": 1530214996
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 56,
            "freq": 11,
            "time": 1530214999
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 11,
            "time": 1530215002
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 9,
            "time": 1530215005
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 7,
            "time": 1530215008
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 4,
            "time": 1530215011
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 8,
            "time": 1530215014
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 13,
            "time": 1530215017
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 2,
            "time": 1530215020
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 13,
            "time": 1530215023
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 13,
            "time": 1530215026
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 7,
            "time": 1530215029
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 3,
            "time": 1530215032
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 2,
            "time": 1530215035
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 5,
            "time": 1530215038
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 12,
            "time": 1530215041
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 7,
            "time": 1530215044
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 13,
            "time": 1530215047
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 6,
            "time": 1530215050
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 11,
            "time": 1530215053
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 11,
            "time": 1530215056
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 15,
            "time": 1530215059
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 14,
            "time": 1530215062
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 8,
            "time": 1530215065
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 3,
            "time": 1530215068
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 2,
            "time": 1530215071
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 6,
            "time": 1530215074
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 12,
            "time": 1530215077
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 12,
            "time": 1530215080
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 2,
            "time": 1530215083
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 15,
            "time": 1530215086
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 12,
            "time": 1530215089
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 13,
            "time": 1530215092
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 7,
            "time": 1530215095
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 14,
            "time": 1530215098
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 9,
            "time": 1530215101
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 2,
            "time": 1530215104
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 8,
            "time": 1530215107
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 3,
            "time": 1530215110
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 7,
            "time": 1530215113
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 4,
            "time": 1530215116
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 15,
            "time": 1530215119
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 3,
            "time": 1530215122
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 10,
            "time": 1530215125
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 3,
            "time": 1530215128
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 6,
            "time": 1530215131
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 12,
            "time": 1530215134
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 9,
            "time": 1530215137
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 4,
            "time": 1530215140
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 10,
            "time": 1530215143
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 11,
            "time": 1530215146
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 50,
            "freq": 10,
            "time": 1530215149
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 15,
            "time": 1530215152
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 70,
            "freq": 12,
            "time": 1530215155
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 3,
            "time": 1530215158
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 10,
            "time": 1530215161
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 8,
            "time": 1530215164
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 67,
            "freq": 13,
            "time": 1530215167
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 6,
            "time": 1530215170
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 5,
            "time": 1530215173
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 11,
            "time": 1530215176
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 3,
            "time": 1530215179
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 11,
            "time": 1530215182
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 10,
            "time": 1530215185
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 5,
            "time": 1530215188
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 13,
            "time": 1530215191
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 3,
            "time": 1530215194
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 3,
            "time": 1530215197
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 8,
            "time": 1530215200
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 73,
            "freq": 15,
            "time": 1530215203
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 11,
            "time": 1530215206
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 2,
            "time": 1530215209
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 14,
            "time": 1530215212
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 7,
            "time": 1530215215
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 75,
            "freq": 11,
            "time": 1530215218
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 61,
            "freq": 3,
            "time": 1530215221
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 11,
            "time": 1530215224
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 64,
            "freq": 5,
            "time": 1530215227
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 58,
            "freq": 6,
            "time": 1530215230
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 12,
            "time": 1530215233
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 78,
            "freq": 2,
            "time": 1530215236
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 14,
            "time": 1530215239
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 74,
            "freq": 5,
            "time": 1530215242
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 15,
            "time": 1530215245
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 12,
            "time": 1530215248
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 9,
            "time": 1530215251
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 7,
            "time": 1530215254
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 14,
            "time": 1530215257
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 62,
            "freq": 13,
            "time": 1530215260
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 69,
            "freq": 12,
            "time": 1530215263
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 59,
            "freq": 7,
            "time": 1530215266
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 7,
            "time": 1530215269
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 11,
            "time": 1530215272
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 8,
            "time": 1530215275
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 53,
            "freq": 14,
            "time": 1530215278
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 3,
            "time": 1530215281
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 5,
            "time": 1530215284
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 15,
            "time": 1530215287
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 60,
            "freq": 15,
            "time": 1530215290
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 77,
            "freq": 2,
            "time": 1530215293
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 63,
            "freq": 10,
            "time": 1530215296
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 7,
            "time": 1530215299
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 51,
            "freq": 8,
            "time": 1530215302
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 3,
            "time": 1530215305
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 7,
            "time": 1530215308
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 66,
            "freq": 12,
            "time": 1530215311
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 12,
            "time": 1530215314
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 13,
            "time": 1530215317
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 5,
            "time": 1530215320
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 65,
            "freq": 12,
            "time": 1530215323
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 13,
            "time": 1530215326
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 71,
            "freq": 8,
            "time": 1530215329
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 54,
            "freq": 15,
            "time": 1530215332
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 57,
            "freq": 14,
            "time": 1530215335
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 76,
            "freq": 13,
            "time": 1530215338
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 72,
            "freq": 11,
            "time": 1530215341
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 46,
            "time": 1530215344
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 109,
            "time": 1530215347
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 98,
            "time": 1530215350
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 130,
            "time": 1530215353
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 134,
            "time": 1530215356
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 99,
            "time": 1530215359
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 125,
            "time": 1530215362
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 123,
            "time": 1530215365
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 127,
            "time": 1530215368
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 120,
            "time": 1530215371
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 98,
            "time": 1530215374
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 43,
            "time": 1530215377
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 66,
            "time": 1530215380
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 42,
            "time": 1530215383
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 114,
            "time": 1530215386
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 75,
            "time": 1530215389
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 74,
            "time": 1530215392
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 114,
            "time": 1530215395
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 78,
            "time": 1530215398
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 133,
            "time": 1530215401
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 76,
            "time": 1530215404
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 97,
            "time": 1530215407
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 48,
            "time": 1530215410
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 118,
            "time": 1530215413
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 112,
            "time": 1530215416
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 30,
            "time": 1530215419
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 31,
            "time": 1530215422
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 42,
            "time": 1530215425
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 104,
            "time": 1530215428
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 58,
            "time": 1530215431
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 122,
            "time": 1530215434
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 105,
            "time": 1530215437
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 98,
            "time": 1530215440
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 36,
            "time": 1530215443
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 118,
            "time": 1530215446
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 89,
            "time": 1530215449
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 118,
            "time": 1530215452
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 65,
            "time": 1530215455
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 140,
            "time": 1530215458
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 85,
            "time": 1530215461
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 94,
            "time": 1530215464
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 136,
            "time": 1530215467
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 63,
            "time": 1530215470
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 61,
            "time": 1530215473
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 122,
            "time": 1530215476
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 45,
            "time": 1530215479
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 57,
            "time": 1530215482
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 133,
            "time": 1530215485
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 133,
            "time": 1530215488
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 65,
            "time": 1530215491
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 77,
            "time": 1530215494
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 87,
            "time": 1530215497
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 70,
            "time": 1530215500
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 52,
            "time": 1530215503
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 80,
            "time": 1530215506
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 94,
            "time": 1530215509
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 94,
            "time": 1530215512
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 87,
            "time": 1530215515
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 87,
            "time": 1530215518
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 106,
            "time": 1530215521
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 77,
            "time": 1530215524
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 58,
            "time": 1530215527
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 45,
            "time": 1530215530
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 120,
            "time": 1530215533
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 57,
            "time": 1530215536
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 55,
            "time": 1530215539
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 124,
            "time": 1530215542
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 85,
            "time": 1530215545
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 65,
            "time": 1530215548
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 143,
            "time": 1530215551
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 81,
            "time": 1530215554
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 86,
            "time": 1530215557
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 74,
            "time": 1530215560
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 92,
            "time": 1530215563
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 82,
            "time": 1530215566
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 133,
            "time": 1530215569
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 73,
            "time": 1530215572
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 73,
            "time": 1530215575
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 90,
            "time": 1530215578
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 58,
            "time": 1530215581
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 148,
            "time": 1530215584
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 146,
            "time": 1530215587
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 107,
            "time": 1530215590
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 73,
            "time": 1530215593
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 46,
            "time": 1530215596
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 111,
            "time": 1530215599
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 72,
            "time": 1530215602
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 113,
            "time": 1530215605
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 140,
            "time": 1530215608
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 94,
            "time": 1530215611
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 99,
            "freq": 48,
            "time": 1530215614
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 99,
            "freq": 45,
            "time": 1530215617
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 109,
            "time": 1530215620
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 40,
            "time": 1530215623
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 75,
            "time": 1530215626
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 70,
            "time": 1530215629
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 99,
            "freq": 96,
            "time": 1530215632
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 145,
            "time": 1530215635
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 77,
            "time": 1530215638
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 96,
            "time": 1530215641
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 92,
            "time": 1530215644
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 126,
            "time": 1530215647
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 123,
            "time": 1530215650
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 59,
            "time": 1530215653
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 57,
            "time": 1530215656
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 116,
            "time": 1530215659
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 126,
            "time": 1530215662
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 102,
            "time": 1530215665
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 49,
            "time": 1530215668
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 82,
            "time": 1530215671
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 55,
            "time": 1530215674
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 150,
            "time": 1530215677
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 59,
            "time": 1530215680
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 147,
            "time": 1530215683
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 146,
            "time": 1530215686
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 44,
            "time": 1530215689
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 83,
            "time": 1530215692
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 125,
            "time": 1530215695
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 115,
            "time": 1530215698
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 69,
            "time": 1530215701
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 72,
            "time": 1530215704
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 128,
            "time": 1530215707
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 45,
            "time": 1530215710
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 122,
            "time": 1530215713
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 99,
            "time": 1530215716
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 114,
            "time": 1530215719
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 54,
            "time": 1530215722
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 97,
            "time": 1530215725
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 48,
            "time": 1530215728
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 68,
            "time": 1530215731
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 58,
            "time": 1530215734
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 82,
            "time": 1530215737
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 59,
            "time": 1530215740
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 127,
            "time": 1530215743
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 141,
            "time": 1530215746
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 61,
            "time": 1530215749
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 61,
            "time": 1530215752
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 92,
            "time": 1530215755
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 128,
            "time": 1530215758
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 99,
            "freq": 41,
            "time": 1530215761
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 67,
            "time": 1530215764
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 69,
            "time": 1530215767
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 85,
            "time": 1530215770
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 99,
            "freq": 143,
            "time": 1530215773
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 142,
            "time": 1530215776
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 117,
            "time": 1530215779
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 62,
            "time": 1530215782
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 81,
            "time": 1530215785
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 91,
            "time": 1530215788
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 89,
            "time": 1530215791
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 130,
            "time": 1530215794
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 37,
            "time": 1530215797
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 149,
            "time": 1530215800
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 127,
            "time": 1530215803
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 35,
            "time": 1530215806
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 87,
            "time": 1530215809
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 150,
            "time": 1530215812
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 145,
            "time": 1530215815
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 32,
            "time": 1530215818
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 31,
            "time": 1530215821
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 119,
            "time": 1530215824
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 61,
            "time": 1530215827
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 64,
            "time": 1530215830
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 54,
            "time": 1530215833
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 42,
            "time": 1530215836
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 109,
            "time": 1530215839
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 99,
            "freq": 92,
            "time": 1530215842
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 123,
            "time": 1530215845
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 87,
            "time": 1530215848
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 56,
            "time": 1530215851
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 139,
            "time": 1530215854
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 69,
            "time": 1530215857
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 93,
            "time": 1530215860
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 149,
            "time": 1530215863
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 94,
            "time": 1530215866
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 90,
            "time": 1530215869
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 66,
            "time": 1530215872
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 114,
            "time": 1530215875
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 59,
            "time": 1530215878
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 95,
            "time": 1530215881
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 47,
            "time": 1530215884
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 104,
            "time": 1530215887
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 35,
            "time": 1530215890
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 114,
            "time": 1530215893
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 90,
            "time": 1530215896
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 45,
            "time": 1530215899
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 54,
            "time": 1530215902
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 60,
            "time": 1530215905
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 110,
            "time": 1530215908
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 146,
            "time": 1530215911
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 83,
            "time": 1530215914
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 73,
            "time": 1530215917
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 118,
            "time": 1530215920
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 65,
            "time": 1530215923
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 32,
            "time": 1530215926
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 31,
            "time": 1530215929
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 89,
            "time": 1530215932
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 83,
            "time": 1530215935
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 144,
            "time": 1530215938
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 100,
            "time": 1530215941
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 114,
            "time": 1530215944
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 86,
            "time": 1530215947
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 84,
            "time": 1530215950
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 105,
            "time": 1530215953
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 58,
            "time": 1530215956
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 116,
            "time": 1530215959
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 70,
            "time": 1530215962
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 148,
            "time": 1530215965
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 130,
            "time": 1530215968
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 73,
            "time": 1530215971
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 150,
            "time": 1530215974
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 41,
            "time": 1530215977
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 143,
            "time": 1530215980
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 115,
            "time": 1530215983
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 81,
            "time": 1530215986
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 43,
            "time": 1530215989
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 133,
            "time": 1530215992
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 141,
            "time": 1530215995
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 141,
            "time": 1530215998
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 80,
            "time": 1530216001
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 53,
            "time": 1530216004
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 93,
            "time": 1530216007
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 133,
            "time": 1530216010
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 140,
            "time": 1530216013
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 109,
            "time": 1530216016
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 46,
            "time": 1530216019
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 136,
            "time": 1530216022
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 140,
            "time": 1530216025
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 33,
            "time": 1530216028
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 146,
            "time": 1530216031
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 60,
            "time": 1530216034
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 60,
            "time": 1530216037
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 95,
            "time": 1530216040
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 100,
            "time": 1530216043
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 147,
            "time": 1530216046
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 125,
            "time": 1530216049
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 96,
            "time": 1530216052
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 43,
            "time": 1530216055
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 37,
            "time": 1530216058
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 140,
            "time": 1530216061
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 75,
            "time": 1530216064
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 86,
            "time": 1530216067
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 137,
            "time": 1530216070
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 83,
            "time": 1530216073
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 97,
            "time": 1530216076
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 85,
            "time": 1530216079
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 144,
            "time": 1530216082
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 115,
            "time": 1530216085
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 104,
            "time": 1530216088
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 134,
            "time": 1530216091
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 85,
            "time": 1530216094
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 39,
            "time": 1530216097
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 131,
            "time": 1530216100
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 131,
            "time": 1530216103
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 48,
            "time": 1530216106
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 51,
            "time": 1530216109
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 70,
            "time": 1530216112
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 66,
            "time": 1530216115
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 143,
            "time": 1530216118
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 99,
            "freq": 128,
            "time": 1530216121
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 92,
            "time": 1530216124
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 57,
            "time": 1530216127
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 74,
            "time": 1530216130
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 145,
            "time": 1530216133
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 140,
            "time": 1530216136
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 37,
            "time": 1530216139
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 37,
            "time": 1530216142
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 52,
            "time": 1530216145
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 150,
            "time": 1530216148
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 65,
            "time": 1530216151
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 110,
            "time": 1530216154
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 64,
            "time": 1530216157
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 115,
            "time": 1530216160
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 94,
            "time": 1530216163
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 88,
            "time": 1530216166
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 91,
            "time": 1530216169
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 92,
            "time": 1530216172
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 136,
            "time": 1530216175
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 55,
            "time": 1530216178
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 140,
            "time": 1530216181
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 61,
            "time": 1530216184
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 106,
            "time": 1530216187
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 121,
            "time": 1530216190
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 86,
            "time": 1530216193
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 94,
            "time": 1530216196
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 49,
            "time": 1530216199
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 120,
            "time": 1530216202
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 51,
            "time": 1530216205
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 59,
            "time": 1530216208
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 145,
            "time": 1530216211
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 123,
            "time": 1530216214
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 135,
            "time": 1530216217
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 71,
            "time": 1530216220
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 95,
            "time": 1530216223
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 135,
            "time": 1530216226
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 79,
            "time": 1530216229
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 82,
            "time": 1530216232
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 72,
            "time": 1530216235
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 39,
            "time": 1530216238
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 142,
            "time": 1530216241
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 40,
            "time": 1530216244
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 147,
            "time": 1530216247
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 110,
            "time": 1530216250
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 61,
            "time": 1530216253
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 69,
            "time": 1530216256
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 91,
            "time": 1530216259
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 52,
            "time": 1530216262
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 73,
            "time": 1530216265
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 101,
            "time": 1530216268
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 36,
            "time": 1530216271
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 40,
            "time": 1530216274
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 125,
            "time": 1530216277
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 64,
            "time": 1530216280
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 71,
            "time": 1530216283
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 63,
            "time": 1530216286
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 46,
            "time": 1530216289
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 100,
            "time": 1530216292
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 72,
            "time": 1530216295
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 109,
            "time": 1530216298
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 41,
            "time": 1530216301
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 54,
            "time": 1530216304
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 134,
            "time": 1530216307
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 65,
            "time": 1530216310
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 81,
            "time": 1530216313
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 133,
            "time": 1530216316
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 125,
            "time": 1530216319
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 37,
            "time": 1530216322
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 134,
            "time": 1530216325
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 54,
            "time": 1530216328
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 76,
            "time": 1530216331
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 144,
            "time": 1530216334
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 68,
            "time": 1530216337
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 109,
            "time": 1530216340
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 45,
            "time": 1530216343
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 86,
            "time": 1530216346
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 43,
            "time": 1530216349
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 78,
            "time": 1530216352
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 59,
            "time": 1530216355
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 81,
            "time": 1530216358
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 133,
            "time": 1530216361
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 74,
            "time": 1530216364
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 135,
            "time": 1530216367
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 70,
            "time": 1530216370
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 45,
            "time": 1530216373
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 43,
            "time": 1530216376
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 56,
            "time": 1530216379
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 66,
            "time": 1530216382
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 132,
            "time": 1530216385
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 125,
            "time": 1530216388
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 118,
            "time": 1530216391
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 101,
            "time": 1530216394
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 127,
            "time": 1530216397
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 39,
            "time": 1530216400
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 116,
            "time": 1530216403
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 37,
            "time": 1530216406
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 31,
            "time": 1530216409
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 93,
            "freq": 40,
            "time": 1530216412
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 129,
            "time": 1530216415
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 79,
            "time": 1530216418
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 105,
            "time": 1530216421
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 141,
            "time": 1530216424
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 98,
            "time": 1530216427
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 41,
            "time": 1530216430
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 115,
            "time": 1530216433
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 41,
            "time": 1530216436
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 74,
            "time": 1530216439
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 121,
            "time": 1530216442
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 30,
            "time": 1530216445
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 114,
            "time": 1530216448
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 69,
            "time": 1530216451
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 81,
            "time": 1530216454
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 103,
            "freq": 41,
            "time": 1530216457
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 99,
            "freq": 72,
            "time": 1530216460
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 94,
            "time": 1530216463
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 109,
            "time": 1530216466
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 32,
            "time": 1530216469
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 58,
            "time": 1530216472
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 60,
            "time": 1530216475
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 140,
            "time": 1530216478
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 81,
            "time": 1530216481
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 85,
            "time": 1530216484
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 88,
            "freq": 95,
            "time": 1530216487
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 43,
            "time": 1530216490
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 57,
            "time": 1530216493
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 43,
            "time": 1530216496
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 76,
            "time": 1530216499
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 115,
            "time": 1530216502
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 142,
            "time": 1530216505
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 136,
            "time": 1530216508
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 32,
            "time": 1530216511
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 32,
            "time": 1530216514
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 87,
            "time": 1530216517
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 91,
            "freq": 87,
            "time": 1530216520
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 120,
            "time": 1530216523
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 111,
            "time": 1530216526
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 92,
            "time": 1530216529
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 141,
            "time": 1530216532
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 37,
            "time": 1530216535
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 38,
            "time": 1530216538
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 33,
            "time": 1530216541
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 74,
            "time": 1530216544
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 92,
            "time": 1530216547
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 77,
            "time": 1530216550
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 109,
            "time": 1530216553
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 124,
            "time": 1530216556
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 141,
            "time": 1530216559
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 131,
            "time": 1530216562
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 71,
            "time": 1530216565
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 55,
            "time": 1530216568
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 94,
            "freq": 70,
            "time": 1530216571
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 58,
            "time": 1530216574
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 132,
            "time": 1530216577
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 83,
            "time": 1530216580
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 114,
            "time": 1530216583
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 119,
            "time": 1530216586
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 53,
            "time": 1530216589
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 121,
            "time": 1530216592
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 111,
            "time": 1530216595
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 67,
            "time": 1530216598
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 66,
            "time": 1530216601
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 63,
            "time": 1530216604
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 149,
            "time": 1530216607
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 105,
            "freq": 43,
            "time": 1530216610
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 34,
            "time": 1530216613
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 67,
            "time": 1530216616
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 133,
            "time": 1530216619
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 37,
            "time": 1530216622
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 133,
            "time": 1530216625
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 143,
            "time": 1530216628
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 97,
            "time": 1530216631
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 68,
            "time": 1530216634
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 34,
            "time": 1530216637
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 95,
            "freq": 34,
            "time": 1530216640
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 73,
            "time": 1530216643
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 83,
            "time": 1530216646
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 141,
            "time": 1530216649
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 122,
            "time": 1530216652
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 138,
            "time": 1530216655
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 84,
            "time": 1530216658
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 136,
            "time": 1530216661
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 39,
            "time": 1530216664
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 97,
            "freq": 43,
            "time": 1530216667
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 80,
            "freq": 85,
            "time": 1530216670
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 132,
            "time": 1530216673
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 95,
            "time": 1530216676
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 107,
            "freq": 61,
            "time": 1530216679
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 36,
            "time": 1530216682
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 96,
            "freq": 54,
            "time": 1530216685
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 84,
            "freq": 36,
            "time": 1530216688
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 50,
            "time": 1530216691
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 91,
            "time": 1530216694
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 116,
            "time": 1530216697
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 37,
            "time": 1530216700
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 141,
            "time": 1530216703
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 110,
            "freq": 36,
            "time": 1530216706
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 83,
            "freq": 129,
            "time": 1530216709
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 81,
            "freq": 115,
            "time": 1530216712
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 139,
            "time": 1530216715
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 61,
            "time": 1530216718
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 134,
            "time": 1530216721
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 102,
            "freq": 130,
            "time": 1530216724
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 100,
            "freq": 36,
            "time": 1530216727
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 37,
            "time": 1530216730
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 109,
            "freq": 85,
            "time": 1530216733
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 138,
            "time": 1530216736
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 86,
            "freq": 103,
            "time": 1530216739
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 32,
            "time": 1530216742
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 48,
            "time": 1530216745
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 92,
            "freq": 49,
            "time": 1530216748
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 97,
            "time": 1530216751
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 82,
            "freq": 93,
            "time": 1530216754
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 85,
            "freq": 77,
            "time": 1530216757
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 106,
            "freq": 126,
            "time": 1530216760
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 90,
            "freq": 141,
            "time": 1530216763
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 108,
            "freq": 121,
            "time": 1530216766
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 104,
            "freq": 94,
            "time": 1530216769
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 89,
            "freq": 108,
            "time": 1530216772
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 98,
            "freq": 76,
            "time": 1530216775
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 101,
            "freq": 45,
            "time": 1530216778
        },
        {
            "id": 6,
            "name": "Haifa",
            "type": "audio",
            "decibel": 87,
            "freq": 125,
            "time": 1530216781
        }
    ];



    var dataPoints = [];

    var options = {
        theme: "light2",
        title: {
            text: "Live Chart from JSON Data"
        },
        data: [{
            type: "spline",
            dataPoints: dataPoints
        }]
    };

    $("#chartContainer").CanvasJSChart(options);

    updateData();

// Initial Values
    var xValue = 0;
    var yValue = 10;
    var newDataCount = 6;

    function addData(data) {
        if (newDataCount != 1) {
            $.each(data, function (key, value) {
                dataPoints.push({ x: value[0], y: parseInt(value[1]) });
                xValue++;
                yValue = parseInt(value[1]);
            });
            newDataCount = 1;
        } else {
            //dataPoints.shift();
            dataPoints.push({ x: data[0][0], y: parseInt(data[0][1]) });
            xValue++;
            yValue = parseInt(data[0][1]);
        }
        $("#chartContainer").CanvasJSChart().render();
        setTimeout(updateData, 1500);
    }

    function updateData() {
        function fakeGetJson(callback) {
            var currentDate = new Date();
            var currentDec = Math.floor((Math.random() * 110) + 80);
            callback([[currentDate,currentDec]]);
        }
        // $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + xValue + "&ystart=" + yValue + "&length=" + newDataCount + "type=json", addData);
        fakeGetJson(addData);
    }
}