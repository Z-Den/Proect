#include <iostream>
#include <string>

using namespace std;

int main()
{ 
    string s (79,'6');
    
    while (s.find("2222") != string::npos || s.find("666") != string::npos){
        if (s.find("2222") != string::npos){
            s.replace (s.find("2222"),4,"6");
        }else{
            s.replace (s.find("666"),3,"2");
        }
    }
    
    cout << s;
    
    return 0;
}