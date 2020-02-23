
import { AES, enc } from 'crypto-js';
import * as sha256 from 'sha256';
import { Network, Server, Keypair, Asset, TransactionBuilder, Operation } from 'stellar-sdk';
import * as http from 'http';
import axios from 'axios';
import { backend } from 'src/environments/environment';
import { StorageService } from 'src/app/shared/services/Storage/storgare.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { IFunctionResponse, IFirebaseUserObject, IUserInfo } from '../../models/Common/common.model';
import { resolve } from 'url';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class TransferTicketService {
  
}
