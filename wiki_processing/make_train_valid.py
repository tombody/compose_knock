#! /usr/bin/python

import random
import sys
import time

def make_train_valid(in_f, train_f, valid_f, p):
    t0=time.time()
    tf = open(train_f, 'wb')
    vf = open(valid_f, 'wb')
    x,t,v = 0,0,0

    with open(in_f, 'rb') as f:
        for line in f:
        #for i in range(3): #used for testing
            if random.random()>p: # probability associated to training set
                tf.write(bytes('<Article>\n' + f.readline().decode('utf-8') + '</Article>\n\n','utf-8'))
                t+=1
            else: #reciprocal probability associated to validation set
                vf.write(bytes('<Article>\n' + f.readline().decode('utf-8') + '</Article>\n\n','utf-8'))
                v+=1
            x+=1
            if (x%10000==0):
                print('Processed {} articles in {:.2f} sec | Train set = {} | Validation set = {}'.format(x,time.time()-t0,t,v))
        tf.close()
        vf.close()
    print('Processing completed in {:.2f} sec'.format(time.time()-t0))
    pass



if __name__ == '__main__':
    if len(sys.argv)!=5:
        print('Usage: python make_train_valid.py <wikipedia txt file> <train file name> <validation file name> <p(train)>')
        sys.exit(1)

    in_f, train_f, valid_f, p =  sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
    try:
        p=float(p)
        if p < 0 or p > 1:
            raise TypeError()
    except:
        print('p(train) must be decimal between 0 and 1')
        sys.exit(1)
    make_train_valid(in_f, train_f, valid_f, p)

